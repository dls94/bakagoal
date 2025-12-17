import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row} from 'react-bootstrap'
import { listVideoDetails } from '../actions/videoActions'
import VideoPlayer from '../components/Video/VideoPlayer'
import { Link } from 'react-router-dom'
import './VideoScreen.css'


function VideoScreen({ match }) {

    const dispatch = useDispatch()

    const videoDetails = useSelector(state => state.videoDetails)
    const { error, loading, video } = videoDetails

    useEffect(() => {
        dispatch(listVideoDetails(match.params.id))
        
    }, [dispatch, match])
    

    return (
        <div>
            
            <Link to='/cavtv' className='text-decoration-none mb-4' >CAV TV</Link>
            <Row className='mt-4'>
                <VideoPlayer video={video} />
            </Row>
        </div>
    )
}

export default VideoScreen
