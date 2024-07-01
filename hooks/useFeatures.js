import { useCallback, useEffect, useState } from "react"

const useFeatures = () => {
    const [features, setFeatures] = useState([])
    const api = '/api/features'

    useEffect(() => {
        const getFeatures = async () => {
            const response = await fetch(api, { method: "GET" })
            const features = await response.json()
            setFeatures(features)
        }
        getFeatures()
    },[])
    
    const saveFeatures = async (arr) => {
        await fetch(api, { 
            method: "POST", 
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "features": arr }), 
        })
    }

    return { features, setFeatures, saveFeatures }

}

export default useFeatures