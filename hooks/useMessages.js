import { useEffect, useState } from "react"

const useMessages = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const getMessages = async () => {
            const response = await fetch("./messages.json")
            const json = await response.json()
            const messages = json.messages
            setMessages(messages)
        }
        getMessages()
    },[messages])

    return { messages }

}

export default useMessages