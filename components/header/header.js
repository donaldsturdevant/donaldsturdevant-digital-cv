import CVLinks from "./cvLinks"
import Selfie from "./selfie"
import style from "./header.module.css"
import texts from "@/helpers/texts"

const Header = () => {
    return (
        <>
            <header className="row mb-4">
                <div className="col-4">
                    <Selfie/>
                </div>
                <div className="col-8">
                    <CVLinks/>
                </div>
            </header>
            <h1><div className={"col-12 mb-5 " + style.title}>{texts.title}</div></h1>
        </>
    )
}

export default Header