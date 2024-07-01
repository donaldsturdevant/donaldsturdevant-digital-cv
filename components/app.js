import Header from "./header/header"
import MessageCenter from "./messageCenter/messageCenter"
import FeatureTracker from "./featureTracker/featureTracker"
import AboutMe from "./aboutMe/aboutMe"

const App = () => {
    return (
        <div className="container">
            <Header />
            <MessageCenter />
            <FeatureTracker />
            <AboutMe />
        </div>
    )
}

export default App