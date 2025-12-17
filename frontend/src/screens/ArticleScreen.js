import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Container } from 'react-bootstrap'
import { listArticleDetails } from '../actions/articleActions'


function ArticleScreen({ match }) {

    const dispatch = useDispatch()

    const articleDetails = useSelector(state => state.articleDetails)
    const { loading, error, article } = articleDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(listArticleDetails(match.params.id))
    }, [dispatch, match])

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={12} className='mx-0'>
                            <Card className="bg-dark text-white">
                                <Card.Img className="photo" src={article.image} alt="Card image"/>
                                <Card.ImgOverlay>
                                    <Card.Subtitle><span className='span-background px-2'>CA VITRY</span></Card.Subtitle>
                                    <Card.Text >
                                        <h2 className='titre-article'>Quentin Pereira rejoint le CA Vitry.</h2>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default ArticleScreen
