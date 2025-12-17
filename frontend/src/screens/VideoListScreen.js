import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listVideos } from '../actions/videoActions'
import Video from '../components/Video/Video'

function VideoListScreen() {

    const dispatch = useDispatch()
    const videoList = useSelector(state => state.videoList)
    const { error, loading, videos } = videoList

    useEffect(() => {
        dispatch(listVideos())
        
    }, [dispatch])

    return (
        <div>
            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message>
            :
            <Row>
             {videos.map(video =>(
                 <Col key={video._id} md={4}  className='my-2'>
                     <Link to={`cavtv/${video._id}`}>
                        <Video video={video}/>
                    </Link>
                 </Col>
            ))}
            </Row>
            }
            
        </div>
    )
}

export default VideoListScreen
