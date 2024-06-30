/* eslint-disable @next/next/no-img-element */
import style from "./aboutMe.module.css"

// this is really the only part of the project that was heavily copy/pasted (from bootstrap docs), but hey if it works-it-works

// I also couldn't get it to work when componentizing the carousel items. not sure why, maybe something to do with how 
// bootstrap is handling it. I'll have to come back to it.
const AboutMeCarousel = () => {
    return (
        <>
            <h3 className={"mt-4 mb-3 " + style.subtitle}>...Because every first web project needs a carousel...</h3>
            <div id="aboutMe" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#aboutMe" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#aboutMe" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#aboutMe" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src="./images/plex_sm.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>NAS + Plex Media Server</h5>
                            <p>Building up my media library on my NAS. (This page is hosted there too!)</p>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="4000">
                        <img src="./images/motorcycle_sm.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className={style.carouselwhitetext}>Love to ride</h5>
                            <p className={style.carouselwhitetext}>{"My XSR900. She's a 'beaut, ain't she?"}</p>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="4000">
                        <img src="./images/theboys_sm.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className={style.carouselwhitetext}>{"Can't forget the good boys"}</h5>
                            <p className={style.carouselwhitetext}>They keep us pretty darn busy too, and they love camping.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#aboutMe" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#aboutMe" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default AboutMeCarousel