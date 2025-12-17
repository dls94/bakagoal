import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Photo from '../components/Photo/Photo'
import { listGalleryDetails } from '../actions/galleryActions'

function PhotoScreen({ match }) {

    const dispatch = useDispatch()

    const galleryDetails = useSelector(state => state.galleryDetails)
    const { loading, error, gallery } = galleryDetails

    useEffect(() => {

        dispatch(listGalleryDetails(match.params.id))
        
    }, [dispatch, match])

    return (
        <div>
            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message>
            :
                <Row>
                {gallery.map(photo =>(
                    <Col key={photo._id} md={4} className='my-2'>
                        <Link to={`photos/${photo._id}`}>
                            <Photo url={photo.image} title={photo.titre} />
                        </Link>
                    </Col>
                ))}
                </Row>
            }
            
        </div>
    )
}

export default PhotoScreen
