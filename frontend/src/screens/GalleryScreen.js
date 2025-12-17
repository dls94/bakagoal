import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import { listGallerys } from '../actions/galleryActions'
import Album from '../components/Photo/Album'
import Loader from '../components/Loader'
import Message from '../components/Message'

function GalleryScreen() {

    const dispatch = useDispatch()
    const galleryList = useSelector(state => state.galleryList)
    const { error, loading, gallerys } = galleryList

    useEffect(() => {
        dispatch(listGallerys())
        
    }, [dispatch])

    return (
        <div>
            <h1>Gallerie</h1>
            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message>
            :
            <Row>
             {gallerys.map(gallery =>(
                 <Col key={gallery._id} md={6} className='my-2'>
                     <Link to={`photos/${gallery._id}`}>
                        <Album url={gallery.image} title={gallery.titre} date={gallery.date}/>
                    </Link>
                 </Col>
            ))}
            </Row>
            }
            
        </div>
    )
}

export default GalleryScreen

