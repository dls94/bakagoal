import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listPlayers } from '../actions/playerActions'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './TeamScreen.css'

function TeamScreen() {

    const dispatch = useDispatch()
    const playerList = useSelector(state => state.playerList)
    const { error, loading, players } = playerList

    useEffect(() => {
        dispatch(listPlayers())
        
    }, [dispatch])

    const gardien = players.filter(player => player.poste === "gardien")
    const defenseur = players.filter(player => player.poste === "defenseur")
    const milieux = players.filter(player => player.poste === "milieux")
    const attaquant = players.filter(player => player.poste === "attaquant")
    

    return (
        <div>
            <h1>Gardiens</h1>
            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message>
            : 
            <Row className='box'>
                {gardien.map(player => (
                    <Col  key={player._id} md={6} lg={4} xl={3}>
                    <Card className='box-row my-3 rounded'>
                        <Link to={`/players/${player._id}`}>
                            <Card.Img className="photo-joueur" src={player.image}/>
                            <Card.ImgOverlay className='d-sm-none'>
                                <Card.Title className='number'>{player.number} </Card.Title><br/>
                                <Card.Text className='name'>{player.nom}</Card.Text><br/>
                                <Card.Text className='poste'>Gardien</Card.Text>

                                
                            </Card.ImgOverlay>
                        </Link>
                    </Card>
                </Col>
            ))}

            </Row>
            }
            <h1>Défenseurs</h1>
            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message>
            : 
            <Row>
                {defenseur.map(player => (
                    <Col  key={player._id} md={6} lg={4} xl={3}>
                    <Card className='box-row my-3 rounded'>
                        <Link to={`/players/${player._id}`}>
                            <Card.Img className="photo-joueur" src={player.image}/>
                            <Card.ImgOverlay className='d-sm-none'>
                                <Card.Title className='number'>{player.number} </Card.Title><br/>
                                <Card.Text className='name'>{player.nom}</Card.Text><br/>
                                <Card.Text className='poste'>Defenseur</Card.Text>

                                
                            </Card.ImgOverlay>
                        </Link>
                    </Card>
                </Col>
                ))}
            </Row>
            }
            <h1>Milieux</h1>
            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message>
            : 
            <Row>
                {milieux.map(player => (
                    <Col  key={player._id} md={6} lg={4} xl={3}>
                    <Card className='box-row my-3 rounded'>
                        <Link to={`/players/${player._id}`}>
                            <Card.Img className="photo-joueur" src={player.image}/>
                            <Card.ImgOverlay className='d-sm-none'>
                                <Card.Title className='number'>{player.number} </Card.Title><br/>
                                <Card.Text className='name'>{player.nom}</Card.Text><br/>
                                <Card.Text className='poste'>Milieux</Card.Text>
                                
                            </Card.ImgOverlay>
                        </Link>
                    </Card>
                </Col>
                ))}
            </Row>
            }
    
            <h1>Attaquants</h1>
            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message>
            : 
            <Row  >
                {attaquant.map(player => (
                    <Col  key={player._id} md={6} lg={4} xl={3}>
                        <Card className='box-row my-3 rounded'>
                            <Link to={`/players/${player._id}`}>
                                <Card.Img className="photo-joueur" src={player.image}/>
                                <Card.ImgOverlay className='d-sm-none'>
                                    <Card.Title className='number'>{player.number} </Card.Title><br/>
                                    <Card.Text className='name'>{player.nom}</Card.Text><br/>
                                    <Card.Text className='poste'>Attaquant</Card.Text>

                                    
                                </Card.ImgOverlay>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
            }
        </div>
    )
}

export default TeamScreen
