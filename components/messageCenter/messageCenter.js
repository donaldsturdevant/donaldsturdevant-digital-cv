import MessageList from "./messageList"
import MessageDisplay from "./messageDisplay"
import style from "./messageCenter.module.css"
import { useCallback, useState } from "react"
import Button from "./messageButton"

const MessageCenter = () => {
    const [selectedMessage, setSelectedMessage] = useState(null)

    return (
        <>
            <div className={"container mb-4 " + style.outline}>
                <h2 className={"my-3 " + style.title}>Message Center</h2>
                <div className="container">
                    <div className="row">
                        <div className="col align-top"><MessageList selectMessage={setSelectedMessage} /></div>
                        <div className="col-lg"><Button selectedMessage={selectedMessage} selectMessage={setSelectedMessage}/><MessageDisplay selectedMessage={selectedMessage}/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageCenter