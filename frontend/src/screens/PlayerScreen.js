import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Table } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listPlayerDetails } from '../actions/playerActions'
import * as GiIcons from 'react-icons/gi'

function PlayerScreen({  match, history }) {

    const dispatch = useDispatch()

    const playerDetails = useSelector(state => state.playerDetails)
    const { loading, error, player } = playerDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {

        dispatch(listPlayerDetails(match.params.id))
        
    }, [dispatch, match])

    
    return (
        <div>
            <Link to='/equipe' className='btn btn-light my-3'>Go back</Link>
            {loading ? 
            <Loader/>
                : error
                ? <Message variant='danger'>error</Message>
                :(
                    <div>
                    
                    <Row>
                        <Col md={4}>
                            <Image  src={player.image} alt={player.name} fluid  />
                        </Col>
                        <Col >
                            <h3 className='mb-3 text-center'>{player.nom} {player.number}</h3>
                            <Table striped bordered hover>
                                <tbody>
                                    <td>Taille</td>
                                    <td>{player.taille}</td>
                                </tbody>
                                <tbody>
                                    <td>Poids</td>
                                    <td>{player.poids}</td>  
                                </tbody>
                                <tbody>
                                    <td>Age</td>
                                    <td>{player.age}</td> 
                                </tbody>
                                <tbody>
                                    <td>Nationalité</td>
                                    <td>{player.nationalité}</td>
                                </tbody>
                                <tbody>
                                    <td>Poste</td>
                                    <td>{player.poste}</td> 
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <h3 className='text-center'>STATISTIQUE</h3>
                            <Table>
                                <tbody className='text-center'>
                                    <tr>
                                        <td>
                                            <GiIcons.GiWhistle/><br/>
                                            <span>Matches</span><br/>
                                            <span>{player.match}</span>
                                        </td>
                                        <td>
                                            <i class="fas fa-futbol" style={{color: 'black'}}></i><br/>
                                            <span>Buts</span><br/>
                                            <span className='text-center'>{player.goals}</span>
                                        </td>
                                        <td>
                                            <GiIcons.GiBarefoot/><br/>
                                            <span>Passes</span><br/>
                                            <span>{player.assists}</span>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Carton jaune</span><br/>
                                            <i class="fas fa-stop" style={{color: 'yellow'}} ></i><br/>
                                            <span>{player.yellowCard}</span><br/>
                                        </td>
                                        <td >
                                            <span>Carton rouge</span><br/>
                                            <i class="fas fa-stop" style={{color: 'red'}} ></i><br/>
                                            <span>{player.redCard}</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                    </tr>
                                </tbody>
                            </Table>
                            
                        </Col>

                    </Row>
                               
                </div>
                )}
            
        </div>
    )
}

export default PlayerScreen
