/* eslint-disable @next/next/no-img-element */
import bannerStyle from "./header.module.css"

const Selfie = () => {
    return (
        <img src="./images/Selfie.jpg" alt="selfie" className={bannerStyle.selfie} />
    )
}

export default Selfie
