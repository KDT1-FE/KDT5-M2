import React from 'react'
import video from '../static/video.mp4'

const BackgroundVideo = () => {

    return (
      <>
        <video muted autoPlay loop>
            <source src={video} type="video/mp4" />
        </video>
      </>
      
    )
  }

export default BackgroundVideo