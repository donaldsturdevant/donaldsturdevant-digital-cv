import MessageList from "./messageList"
import MessageDisplay from "./messageDisplay"
import style from "./messageCenter.module.css"
import { useCallback, useState } from "react"
import Button from "./messageButton"

const MessageCenter = () => {
    const [selectedMessage, setSelectedMessage] = useState(null)

    return (
        <>
            <div className={"container ps-5 pe-5 mb-5 " + style.outline}>
                <h2 className={"container mt-2 " + style.title}>Message Center</h2>
                <div className="col-12 mt-3">
                    <div className="row">
                        <div className="col align-top pt-5 ps-3 pe-3"><MessageList selectMessage={setSelectedMessage} /></div>
                        <div className="col p-5"><Button selectedMessage={selectedMessage} selectMessage={setSelectedMessage}/><MessageDisplay selectedMessage={selectedMessage}/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageCenter