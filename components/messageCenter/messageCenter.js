import MessageList from "./messageList"
import MessageDisplay from "./messageDisplay"
import style from "./messageCenter.module.css"
import { useCallback, useState } from "react"
import Button from "./messageButton"

const MessageCenter = () => {
    const [selectedMessage, setSelectedMessage] = useState(null)

    return (
        <>
            <div className={"col-12 ps-5 pe-5 mb-5 " + style.outline}>
                <h2 className={"mt-2 " + style.title}>Message Center</h2>
                <table className="table mt-3 table-bordered">
                    <tbody>
                        <tr>
                            <td className="col-6 align-top pt-5 ps-3 pe-3"><MessageList selectMessage={setSelectedMessage} /></td>
                            <td className="p-5"><Button selectedMessage={selectedMessage} selectMessage={setSelectedMessage}/><MessageDisplay selectedMessage={selectedMessage}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MessageCenter