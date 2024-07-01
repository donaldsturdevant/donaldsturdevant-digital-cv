import style from "./featureTracker.module.css"
import DoneList from "./featureDone"
import WishList from "./featureWishList"
import useFeatures from "@/hooks/useFeatures"

const FeatureTracker = () => {
    const { features, setFeatures, saveFeatures } = useFeatures()

    const addFeature = (newFeature) => {

        if (features.map(x => x.Description).includes(newFeature)) return
        const newArr = [...features, { Description: newFeature, Commit: "" }]
        setFeatures(newArr)
        saveFeatures(newArr)
        
    }

    const commitFeature = (description, commit) => {

        if (!commit) return
        const newArr = [...features.filter(x => x.Description !== description), { "Description": description, "Commit": commit }]
        setFeatures(newArr)
        saveFeatures(newArr)

    }

    return (
        <div className={"container mb-5"}>
            <h2 className={"mb-3 " + style.title}>Feature/SkillsDemonstration Tracker</h2>
            <div className="row">
                <div className="container col"><DoneList features={features} /></div>
                <div className="container col"><WishList features={features} addFeature={addFeature} commitFeature={commitFeature} /></div>
            </div>
        </div>
    )
}

export default FeatureTracker