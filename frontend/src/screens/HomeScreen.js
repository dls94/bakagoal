import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Article from '../components/Article/Article'
import Photo from '../components/Photo/Photo'
import Match from '../components/Match/Match'
import './HomeScreen.css'
import { listGallerys } from '../actions/galleryActions'

function HomeScreen({ match }) {

    const dispatch = useDispatch()
    
 
     useEffect(() => {
         dispatch(listGallerys())
         
     
     }, [dispatch, match])

    return (
        <div>
            <Article/>
            
                <Row className='my-3' >
                
                    <Col md={4} className='my-3'>
                
                        <Photo url="https://bakagoal.s3.eu-west-3.amazonaws.com/images/bakagoal_champion.jpeg" title="Je suis venue pour faire de vitry un grand club"/>
                    </Col>

                    <Col md={4} className='my-3'>
                        <Photo url="https://bakagoal.s3.eu-west-3.amazonaws.com/images/test.jpeg" title="Cedric Bakambu rencontre les jeunes talent de Vitry"/>
                    </Col>
                
                    <Col md={4} className='my-3'>
                        <Photo url="https://bakagoal.s3.eu-west-3.amazonaws.com/images/Pilaudin.jpeg" title="Le renouveau du stade Pilaudin"/>
                    </Col>
                
                </Row>

    
                <h5 className='mx-4' style={{letterSpacing: 0}}>Prochain Match</h5>
                <Container className='overflow' fluid>
                <Row className='py-3 overflow-next-match'>
                    <Col md={4} xl={4}>
                        <Match/>
                    </Col>
                    <Col md={4}>
                        <Match/>
                    </Col>
                    <Col md={4}>
                        <Match/>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default HomeScreen
