import useMessages from "@/hooks/useMessages"
import style from "./messageCenter.module.css"
import Subject from "./subject"

const MessageList = ({selectMessage}) => {
    const { messages } = useMessages()

    return (
        <div>
            <table className={"table table-hover " + style.messages}>
                <thead>
                    <tr>
                        <td>To</td>
                        <td>From</td>
                        <td>Subject</td>
                        <td>Date</td>
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