import React from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'


function VideoPlayer({ video }) {

    

    return (
        <div className='player-wrapper'>
            
                <ReactPlayer
                    url={video.url}
                    controls
                    playing={false}
                    width='100%'
                    height='100%'
                    style={{ position: "absolute", top:"0", left:"0" }}
                    
                />
            
        </div>
    )
}

export default VideoPlayer
