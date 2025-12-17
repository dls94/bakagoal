import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Player.css'

function Player({ player }) {
    return (
        <Card className="my-3  rounded">
            <Link to={`/players/${player._id}`}>
                <Card.Img className="photo-joueur" src={player.image}/>
                <Card.ImgOverlay>
                    <Card.Title><h2 className='number'>{player.number}</h2></Card.Title>
                </Card.ImgOverlay>
            </Link>
    </Card>
    )
}

export default Player
