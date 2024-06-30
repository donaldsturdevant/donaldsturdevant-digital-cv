/* eslint-disable @next/next/no-img-element */
import style from "./aboutMe.module.css"
import AboutMeCarousel from "./aboutMeCarousel"
import LEDProject from "./aboutMeLEDProject"

const AboutMe = () => {
    return (
        <>
            <div className={"container ps-5 pe-5 mb-5"}>
                <h2 className={"mt-2 " + style.title}>About Me</h2>
                <div>
                    <AboutMeCarousel />
                </div>
                <div>
                    <LEDProject />
                </div>
            </div>
        </>
    )
}

export default AboutMe