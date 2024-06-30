import CVLinks from "./cvLinks"
import Selfie from "./selfie"
import style from "./header.module.css"
import texts from "@/helpers/texts"

const Header = () => {
    return (
        <div className="container">
            <header className="mb-4">
                <div className="row">
                    <div className="col-3 child">
                        <Selfie/>
                    </div>
                    <div className="col child">
                        <CVLinks/>
                    </div>
                </div>
            </header>
            <h1><div className={"mb-5 " + style.title}>{texts.title}</div></h1>
        </div>
    )
}

export default Header