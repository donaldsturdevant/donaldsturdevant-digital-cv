import { useEffect, useState } from "react"

const useMessages = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const getMessages = async () => {
            let response = await fetch('./messages.json')
            response = await response.json()
            response = response.messages
            setMessages(response)
        }
        getMessages()
    },[messages])

    return { messages }

}

export default useMessages