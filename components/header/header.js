import CVLinks from "./cvLinks"
import Selfie from "./selfie"

const Header = () => {
    return (
        <header className="row mb-4 sticky">
            <div className="col-4">
                <Selfie/>
            </div>
            <div className="col-8">
                <CVLinks/>
            </div>
        </header>
    )
}

export default Header