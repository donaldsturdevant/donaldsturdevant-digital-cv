import useMessages from "@/hooks/useMessages"
import style from "./messageCenter.module.css"
import Subject from "./subject"

const MessageList = ({selectMessage}) => {
    const { messages } = useMessages()

    if (messages === undefined || messages.length === 0) return

    return (
        <div>
            <table className={"table table-hover table-sm " + style.messages}>
                <thead>
                    <tr>
                        <th>To</th>
                        <th>From</th>
                        <th>Subject</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map(message => (
                        <tr onClick={() => selectMessage(message)} key={message.id}>
                            <td>{message.To}</td>
                            <td>{message.From}</td>
                            <td><Subject subject={message.Subject} /></td>
                            <td>{message.Date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MessageList