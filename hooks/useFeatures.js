import { useCallback, useEffect, useState } from "react"

const useFeatures = () => {
    const [features, setFeatures] = useState([])
    const fileName = './databaseCandidates/features.json'

    useEffect(() => {
        const getFeatures = async (fileName) => {
            const response = await fetch(fileName)
            const json = await response.json()
            const features = json.features
            setFeatures(features)
        }
        getFeatures()
    },[])
    
    const safeToFile = async (fileName) => {
        await fetch(fileName, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(features),
        })
    }

    return { features, setFeatures }

}

export default useFeatures