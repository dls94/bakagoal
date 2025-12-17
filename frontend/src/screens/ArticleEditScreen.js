import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listArticleDetails, updateArticle } from '../actions/articleActions'
import {  ARTICLE_UPDATE_RESET } from '../constants/articleConstants'

function ArticleEditScreen({ match, history }) {

    const articleId = match.params.id

    const [nom, setNom] = useState('')
    const [titre, setTitre] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)


    const dispatch = useDispatch()

    const articleDetails = useSelector(state => state.articleDetails)
    const { error, loading, article } = articleDetails

    const articleUpdate = useSelector(state => state.articleUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = articleUpdate

    useEffect(() => {

        if(successUpdate){
            dispatch({type: ARTICLE_UPDATE_RESET})
            history.push('/admin/articlelist')
        }
        else{

            if(!article.nom || article._id !== Number(articleId)){
                dispatch(listArticleDetails(articleId))
            }
            else{
                setNom(article.nom)
                setTitre(article.titre)
                setImage(article.image)                
                setDescription(article.description)
            }
        }
    }, [dispatch, article, articleId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateArticle({
            _id: articleId,
            nom,
            titre,
            image,
            description
        }))
       
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('article_id', articleId)

        setUploading(true)

        try{
            const config = {
                headers:{
                    'Content-type':'multipart/form-data'
                }
            }

            const {data} = await axios.post('/api/articles/upload/', formData, config)

            setImage(data)
            setUploading(false)
        }
        catch(error){
            setUploading(false)
        }
    }

    return (
        <div>
            <Link to='/admin/articlelist'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit Product</h1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                
                {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (

                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='nom'>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Nom'
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='titre'>
                        <Form.Label>Titre</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Titre'
                            value={titre}
                            onChange={(e) => setTitre(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='image'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Image'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}>
                        </Form.Control>

                        <Form.File
                            id='image-file'
                            custom
                            onChange={uploadFileHandler}
                            >
                        </Form.File>
                        {uploading && <Loader/>}
                    </Form.Group><br/>
                    
                    <Form.Group controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='description'
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>
                    


                    <Button type='submit' variant='primary'>Update</Button>

                </Form>
                )}
            </FormContainer>
            
        </div>
    )
}

export default ArticleEditScreen
