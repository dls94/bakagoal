import React from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap'
import './Match.css'

function Match() {
    return (
        <div>
            <Card>

                
                <Card.Img className='match-photo' src='https://bakagoal.s3.eu-west-3.amazonaws.com/images/stade+bg.jpeg'></Card.Img>
                <Card.ImgOverlay>
                            <img
                                src="https://bakagoal.s3.eu-west-3.amazonaws.com/images/logo+ext.png"
                                width="50"
                                height="50"
                                className="logo-dom"
                                alt="CAV logo"
                            />

                            <span className='logo-vs'>VS</span>
                            <img
                                src="https://bakagoal.s3.eu-west-3.amazonaws.com/images/CAV.png"
                                width="50"
                                height="50"
                                className="logo-ext"
                                alt="CAV logo"
                                />
                </Card.ImgOverlay>
                

                <Card.Footer className='match-footer' style={{color:'white', background: 'rgb(3, 87, 87'}}><span className='text-match'>SENIOR R1</span></Card.Footer>
            </Card>
            
        </div>
    )
}

export default Match
