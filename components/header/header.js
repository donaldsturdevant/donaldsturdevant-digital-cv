import CVLinks from "./cvLinks"
import Selfie from "./selfie"
import cvLinks from "@/helpers/cvLinks"

const Header = () => {
    return (
        <header className={"row mb-" + cvLinks.length}>
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