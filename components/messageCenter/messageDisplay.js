import style from "./messageCenter.module.css"
import Subject from "./subject"

const MessageDisplay = ( { selectedMessage } ) => {
    if (selectedMessage) {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <th>To</th>
                            <td>{selectedMessage.To}</td>
                        </tr>
                        <tr>
                            <th>From</th>
                            <td>{selectedMessage.From}</td>
                        </tr>
                        <tr>
                            <th>Date</th>
                            <td>{selectedMessage.Date}</td>
                        </tr>
                    </tbody>
                </table>
                <div className={"mt-3 " + style.subject}><Subject subject={selectedMessage.Subject} /></div>
                <p className={"mt-3 " + style.body}>{selectedMessage.Body}</p>
            </>
        )
    } else {
        return ""
    }
}

export default MessageDisplay