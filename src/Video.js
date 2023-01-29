import React, { useEffect, useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import MyVideo from "./VID_66700118_053707_708.mp4"
// import MyVideo from "./video1.mp4"

function Video() {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    // const videosFiles = [MyVideo]

    const videoPlaying = () => {
        // If video is playing
        // Stop It...
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
        // If video is not playing 
        // Play it...
    }

    useEffect(() => {
        videoRef.current.play()
        setPlaying(true)
    }, [])


    return (
        <div className='video'>

            {/* <video
                loop
                src="../asset/Videos/video1.mp4"
                type="video/mp4"
            ></video> */}
            <video
                onClick={videoPlaying}
                ref={videoRef}
                loop
                className='video__player'>
                <source src={MyVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <VideoFooter />
            {/* <VideoSidebar/> */}
            {/* <video controls preload="auto" width="100%" height="100%">
                <source src={MyVideo} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video> */}
            {/* Video Footer */}
            {/* Video Sidebar */}
        </div>
    )
}

export default Video