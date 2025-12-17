import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        
        <footer className="Footer">
            <Container>
                <Row className="justify-content-md-center" >
                    <Col >
                        <img
                            src="https://bakagoal.s3.eu-west-3.amazonaws.com/images/zendrivergris.png"

                            width="150"
                            height="50"
                            className="d-inline-block align-top"
                            alt="CAV logo gris"
                        />   
                    </Col>

                    <Col>
                        <img

                            src="https://bakagoal.s3.eu-west-3.amazonaws.com/images/upgradebodygris.png"

                            width="150"
                            height="50"
                            className="d-inline-block align-top"
                            alt="CAV logo gris"
                        />
                    </Col>

                    <Col>
                        <img
                            src="https://bakagoal.s3.eu-west-3.amazonaws.com/images/bakalogogris.png"
                            width="150"
                            height="50"
                            className="d-inline-block align-top"
                            alt="CAV logo gris"
                        />
                    </Col>

                    <Col>
                        <img
                            src="https://bakagoal.s3.eu-west-3.amazonaws.com/images/Boltgris.png"
                            width="100"
                            height="50"
                            className="d-inline-block align-top"
                            alt="CAV logo gris"
                        />
                    </Col>
                </Row>

                <hr className="separator" />
                
                <Row className="footer" >
                    <Col xs lg="2" className='mb-4 ' /*md={{ span: 3, offset: 2 }}*/ >
                    <h4 style= {{color : 'rgba(255,255,255,.55)'}}>CA.VITRY</h4>
                        <Nav.Link className='px-0 py-1' href="/equipe" style= {{color : 'rgba(255,255,255,.55)'}}>Equipe</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/cavtv" style= {{color : 'rgba(255,255,255,.55)'}}>CAV TV</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/photo" style= {{color : 'rgba(255,255,255,.55)'}}>Photo</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/club" style= {{color : 'rgba(255,255,255,.55)'}}>Club</Nav.Link>
                    </Col>
                    <Col xs lg="2" className='mb-4 '>

                    <h4 style= {{color : 'rgba(255,255,255,.55)'}}>SERVICES</h4>
                        <Nav.Link className='px-0 py-1' href="/profile" style= {{color : 'rgba(255,255,255,.55)'}}>Mon compte</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/billeterie" style= {{color : 'rgba(255,255,255,.55)'}}>Billeterie</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/boutique" style= {{color : 'rgba(255,255,255,.55)'}}>Boutique</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/" style= {{color : 'rgba(255,255,255,.55)'}}>Stadium Tour</Nav.Link>
                    </Col>

                    <Col xs lg="2" className='mb-4 ' >
                    <h4 style= {{color : 'rgba(255,255,255,.55)'}}>LANGUES</h4>
                        <Nav.Link className='px-0 py-1' href="/" style= {{color : 'rgba(255,255,255,.55)'}}>Français</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/" style= {{color : 'rgba(255,255,255,.55)'}}>English</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/" style= {{color : 'rgba(255,255,255,.55)'}}>Português</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/" style= {{color : 'rgba(255,255,255,.55)'}}>Español</Nav.Link>
                    </Col>

                    <Col xs lg="2" className='mb-4 '>
                    <h4 className='color-text-' style= {{color : 'rgba(255,255,255,.55)'}}>AIDE</h4>
                        <Nav.Link className='px-0 py-1' href="/" style= {{color : 'rgba(255,255,255,.55)'}}>Contactez-nous</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/" style= {{color : 'rgba(255,255,255,.55)'}}>Questions fréquentes</Nav.Link>
                        <Nav.Link className='px-0 py-1' href="/" style= {{color : 'rgba(255,255,255,.55)'}}>Mentions légales</Nav.Link>
                        
                    </Col>
                        
                </Row>
                
                <Row>
                    <Col className="text-center pt-4 mb-1" style= {{color : 'rgba(255,255,255,.55)'}}>Copyright &copy; 2021 CA Vitry. All rights reserved</Col>
                </Row>
                <Row>
                    <Col className="text-center " style= {{color : 'rgba(255,255,255,.55)'}} >
                        <Link href="/"><i className="fab fa-facebook"></i></Link>{' '}
                        <Link href="https://instagram.com/ca_vitry?utm_medium=copy_link"><i className="fab fa-instagram"></i></Link>{' '}
                        <Link href="/"><i className="fab fa-twitter"></i></Link>{' '}
                        <Link href="/"><i className="fab fa-youtube"></i></Link>{' '}
                        <Link href="/"><i className="fab fa-snapchat"></i></Link>
                    </Col>
                </Row>
            </Container>
            
        </footer>
    )
}

export default Footer
