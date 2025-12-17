import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listPlayers, deletePlayer, createPlayer } from '../actions/playerActions'
import { PLAYER_CREATE_RESET } from '../constants/playerConstants'

function PlayerListScreen({ history }) {

    const dispatch = useDispatch()

    const playerList = useSelector(state => state.playerList)
    const { loading, error, players } = playerList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const playerCreate = useSelector(state => state.playerCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, player: createdPlayer } = playerCreate

    const playerDelete = useSelector(state => state.playerDelete)
    const { success: successDelete } = playerDelete

    let keyword = history.location.search

    useEffect(() => {

        dispatch({ type: PLAYER_CREATE_RESET })

        if(!userInfo.isAdmin){
            history.push('/login')
        }
        if(successCreate){
            history.push(`/admin/player/${createdPlayer._id}/edit`)
        }
        else{
            dispatch(listPlayers(keyword))
        }

    }, [dispatch, history, successDelete, userInfo, successCreate, createdPlayer, keyword])

    const deleteHandler = (id) => {
        if(window.confirm('Voulez-vous vraiment supprimer ce joueur ?')){

            dispatch(deletePlayer(id))
        }
    }

    const createPlayerHandler = () => {
        dispatch(createPlayer())
    }

    return (
        <div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Joueur</h1>
                </Col>
                <Col className='text-end'>
                    <Button className='my-3' onClick={createPlayerHandler}>

                        <i className='fas fa-plus'></i> Creéer un Joueur

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
                                <th>POSTE</th>
                                <th>AGE</th>
                                <th>NUMERO</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {players.map(player => (
                                <tr key={player._id}>
                                    <td>{player._id}</td>
                                    <td>{player.nom.toUpperCase()}</td>
                                    <td>{player.poste.toUpperCase()}</td>
                                    <td>{player.age} ans</td>
                                    <td>{player.number}</td>

                                     <td>
                                         <LinkContainer to={`/admin/player/${player._id}/edit`}>
                                             <Button variant='light' className='btn_sm'>
                                                <i className='fas fa-edit' style={{color: 'black'}}></i>
                                             </Button>
                                         </LinkContainer>

                                        
                                         <Button variant='danger' className='btn_sm' onClick={() => deleteHandler(player._id)}>
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

export default PlayerListScreen
