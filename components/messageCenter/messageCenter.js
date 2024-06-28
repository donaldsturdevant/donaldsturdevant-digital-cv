import MessageList from "./messageList"
import MessageDisplay from "./messageDisplay"
import style from "./messageCenter.module.css"
import { useCallback, useState } from "react"
import Button from "./button"

const MessageCenter = () => {
    const [selectedMessage, setSelectedMessage] = useState(null)

    return (
        <>
            <div className={"col-12 mt-5 " + style.outline}>
                <header><div className={"mt-2 " + style.title}>Message Center</div></header>
                <table className="table m-3 table-bordered">
                    <tbody>
                        <tr>
                            <td className="col-5 align-top p-5"><MessageList selectMessage={setSelectedMessage} /></td>
                            <td className="col-5 p-5"><Button selectedMessage={selectedMessage} selectMessage={setSelectedMessage}/><MessageDisplay selectedMessage={selectedMessage}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MessageCenter