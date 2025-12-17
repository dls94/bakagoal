import React from 'react'
import {Card, Container} from 'react-bootstrap'
import './Photo.css'

function Photo({ url, title }) {
    return (
        <Container className='card-contener'>

            <Card >
                <Card.Img className='image-opacity'  src={url} alt="Card image"></Card.Img>
                <Card.ImgOverlay >
                    <Card.Title className='titre-photo'>{title}</Card.Title>
                    <Card.Subtitle className='span-photo'>
                        <span className=' px-2 me-3' style={{background: 'rgb(3, 87, 87'}}>CAVITRY</span>
                    </Card.Subtitle>
                </Card.ImgOverlay>
            </Card>
        </Container>
            
       
    )
}

export default Photo