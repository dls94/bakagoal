import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listPlayerDetails, updatePlayer } from '../actions/playerActions'
import {  PLAYER_UPDATE_RESET } from '../constants/playerConstants'

function PlayerEditScreen({ match, history }) {

    const playerId = match.params.id

    const [taille, setTaille] = useState()
    const [poids, setPoids] = useState()
    const [age, setAge] = useState()
    const [nom, setNom] = useState('')
    const [nationalité, setNationalité] = useState('')
    const [poste, setPoste] = useState('')
    const [matchs, setMatchs] = useState()
    const [uploading, setUploading] = useState(false)
    const [goals, setGoals] = useState()
    const [assists, setAssists] = useState()
    const [image, setImage] = useState('')
    const [yellowCard, setYellowCard] = useState()
    const [redCard, setRedCard] = useState()
    const [onPenalties, setOnPelnaties] = useState()
    const [number, setNumber] = useState()

    const dispatch = useDispatch()

    const playerDetails = useSelector(state => state.playerDetails)
    const { error, loading, player } = playerDetails

    const playerUpdate = useSelector(state => state.playerUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = playerUpdate

    useEffect(() => {

        if(successUpdate){
            dispatch({type: PLAYER_UPDATE_RESET})
            history.push('/admin/playerlist')
        }
        else{

            if(!player.nom || player._id !== Number(playerId)){
                dispatch(listPlayerDetails(playerId))
            }
            else{
                setTaille(player.taille)
                setPoids(player.poids)
                setAge(player.age)
                setNationalité(player.nationalité)
                setPoste(player.poste)
                setNumber(player.number)
                setMatchs(player.matchs)
                setGoals(player.goals)
                setOnPelnaties(player.onPenalties)
                setAssists(player.assists)
                setNom(player.nom)
                setImage(player.image)
                setYellowCard(player.yellowCard)
                setRedCard(player.redCard)
            }
        }

    }, [dispatch, player, playerId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updatePlayer({
            _id: playerId,
            taille,
            poids,
            age,
            nom,
            nationalité,
            poste,
            number,
            matchs,
            image,
            goals,
            assists,
            onPenalties,
            yellowCard,
            redCard,
        }))
    
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('player_id', playerId)

        setUploading(true)

        try{
            const config = {
                headers:{
                    'Content-type':'multipart/form-data'
                }
            }

            const {data} = await axios.post('/api/players/upload/', formData, config)

            setImage(data)
            setUploading(false)
        }
        catch(error){
            setUploading(false)
        }
    }


    return (
        <div>
            <Link to='/admin/playerlist'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit Player</h1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                
                {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (

                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='nom'>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type='nom'
                            placeholder='Entrer le Nom'
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='age'>
                    <Form.Label>Age</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder=''
                            value={age}
                            onChange={(e) => setAge(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='taille'>
                        <Form.Label>Taille</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder=''
                            value={taille}
                            onChange={(e) => setTaille(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='poids'>
                        <Form.Label>Poids</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder=''
                            value={poids}
                            onChange={(e) => setPoids(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='poste'>
                        <Form.Label>Poste</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder=''
                            value={poste}
                            onChange={(e) => setPoste(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='match'>
                        <Form.Label>Numéro</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder=''
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='nationalité'>
                        <Form.Label>Nationalité</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Nationalité'
                            value={nationalité}
                            onChange={(e) => setNationalité(e.target.value)}>
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

                    <Form.Group controlId='match'>
                        <Form.Label>Match joués</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder=''
                            value={matchs}
                            onChange={(e) => setMatchs(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='goals'>
                        <Form.Label>Buts</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder=''
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='assists'>
                        <Form.Label>Passes</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder=''
                            value={assists}
                            onChange={(e) => setAssists(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    

                    <Form.Group controlId='yellowCard'>
                        <Form.Label>Cartons Jaune</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder=''
                            value={yellowCard}
                            onChange={(e) => setYellowCard(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>

                    <Form.Group controlId='redCard'>
                        <Form.Label>Cartons Jaune</Form.Label>
                        <Form.Label>Cartons Rouge</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder=''
                            value={redCard}
                            onChange={(e) => setRedCard(e.target.value)}>
                        </Form.Control>
                    </Form.Group><br/>
                    


                    <Button type='submit' variant='primary'>Update</Button>

                </Form>
                )}
            </FormContainer>
            
        </div>
    )
}

export default PlayerEditScreen
