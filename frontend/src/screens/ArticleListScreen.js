import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listArticles, deleteArticle, createArticle } from '../actions/articleActions'
import { ARTICLE_CREATE_RESET } from '../constants/articleConstants'

function ArticleListScreen({ history }) {

    const dispatch = useDispatch()

    const articleList = useSelector(state => state.articleList)
    const { loading, error, articles } = articleList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const articleCreate = useSelector(state => state.articleCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, article: createdArticle } = articleCreate

    const articleDelete = useSelector(state => state.articleDelete)
    const { success: successDelete } = articleDelete

    let keyword = history.location.search

    useEffect(() => {

        dispatch({ type: ARTICLE_CREATE_RESET })

        if(!userInfo.isAdmin){
            history.push('/login')
        }
        if(successCreate){
            history.push(`/admin/article/${createdArticle._id}/edit`)
        }
        else{
            dispatch(listArticles(keyword))
        }

    }, [dispatch, history, successDelete, userInfo, successCreate, createdArticle, keyword])

    const deleteHandler = (id) => {
        if(window.confirm('Voulez-vous vraiment supprimer cet article ?')){

            dispatch(deleteArticle(id))
        }
    }

    const createArticleHandler = () => {
        dispatch(createArticle())
    }


    return (
        <div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Articles</h1>
                </Col>
                <Col className='text-end'>
                    <Button className='my-3' onClick={createArticleHandler}>
                        <i className='fas fa-plus'></i> Créer un Article
                    </Button>
                </Col>
            </Row>
            {loading 
            ? <Loader />
            : error
                ? (<Message variant='danger'>{error}</Message>)
                : (
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOM</th>
                                <th>TITRE</th>
                                <th>DESCRIPTION</th>
                                <th>DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {articles.map(article => (
                                <tr key={article._id}>
                                    <td>{article._id}</td>
                                    <td>{article.nom.toUpperCase()}</td>
                                    <td>{article.titre.toUpperCase()}</td>
                                    <td>{article.description}</td>
                                    <td>{article.date}</td>

                                     <td>
                                         <LinkContainer to={`/admin/article/${article._id}/edit`}>
                                             <Button variant='light' className='btn_sm'>
                                                <i className='fas fa-edit' style={{color: 'black'}}></i>
                                             </Button>
                                         </LinkContainer>

                                        
                                         <Button variant='danger' className='btn_sm' onClick={() => deleteHandler(article._id)}>
                                                <i className='fas fa-trash'></i>
                                        </Button>
                                     </td>
                        
                                </tr>
                                    ))}
                        </tbody>
                    </Table>
                )}
            
        </div>
    )
}

export default ArticleListScreen
