import CVLinks from "./cvLinks"
import Selfie from "./selfie"
import style from "./header.module.css"
import texts from "@/helpers/texts"
import QRCode from "./qrCode"

const Header = () => {
    return (
        <div className="container">
            <header className="mb-4">
                <div className="row">
                    <div className="col">
                        <Selfie />
                    </div>
                    <div className="col-8">
                        <CVLinks />
                    </div>
                    <div className="col">
                        <QRCode />
                    </div>
                </div>
            </header>
            <h1><div className={"mb-5 " + style.title}>{texts.title}</div></h1>
        </div>
    )
}

export default Header