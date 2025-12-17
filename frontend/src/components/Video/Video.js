import React from 'react'
import {Card, Container} from 'react-bootstrap'
import { IoCaretForwardCircleOutline } from "react-icons/io5"
import './Video.css'

function Video({ video }) {
    return (
        <Container className='card-contener'>
            <Card >
                <Card.Img className='image-opacity'  src={video.image} alt="Card image"></Card.Img>
                    <Card.Subtitle className='span-video'>
                        <span className=' px-2 me-3' style={{background: 'rgb(3, 87, 87'}}>CAVITRY</span> | {video.added}
                    </Card.Subtitle>
                    <IoCaretForwardCircleOutline className='icon-video'/>
            </Card>
        </Container>    
       
    )
}

export default Video