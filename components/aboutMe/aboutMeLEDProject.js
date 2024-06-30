import { useState } from "react"
import style from "./aboutMe.module.css"
import videosLinks from "@/helpers/videoLinks"
import Video from "./aboutMeVideo"

const LEDProject = () => {
    const videos = videosLinks.ledproject // should be a state if it ever might change, but it doesn't for now

    return (
        <div className="container">
            <div className={"row mt-5 mb-2 " + style.subtitle}>
                <h6>{"I love tinkering. Here's my latest tinker project:"}</h6>
                <h6>LED Entertainment area</h6>
            </div>
            <div className="row">
                {videos.map(video => (
                    <div key={video.url} className="col">
                        <Video video={video} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LEDProject