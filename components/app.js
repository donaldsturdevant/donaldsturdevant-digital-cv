import Header from "./header/header"
import MessageCenter from "./messageCenter/messageCenter"
import headerStyle from "./header/header.module.css"
import text from "@/helpers/text"

const App = () => {
    return (
        <>
            <Header/>
            <h3><div className={"col-12 " + headerStyle.title}>{text.title}</div></h3>
            <MessageCenter/>
        </>
    )
}

export default App