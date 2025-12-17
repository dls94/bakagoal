import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Article.css'

function Article({ article }) {

    return (
        
            <Container fluid>
                
            <Row className="article-height">
                <Col sm={8} className='mx-0'>
                    <Card className="bg-dark text-white">
                        <Card.Img className="photo" src="https://bakagoal.s3.eu-west-3.amazonaws.com/images/signature+quentin.jpeg" alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Subtitle><span className='span-background px-2'>CA VITRY</span></Card.Subtitle>
                            <Card.Text >
                                <h2 className='titre-article'>Quentin Pereira rejoint le CA Vitry.</h2>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>

                </Col>
                <Col>
                    <Card className='rencontre'>
                        <Card.Img className="photo" src="https://bakagoal.s3.eu-west-3.amazonaws.com/images/rencontre.jpeg" alt="Card image" />
                    </Card>
                </Col>
            </Row>
            </Container>
        
    )
}

export default Article
