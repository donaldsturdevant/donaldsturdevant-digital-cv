import { useState } from "react"
import FeatureAdd from "./featureAdd"
import style from "./featureTracker.module.css"
import useFeatures from "@/hooks/useFeatures"
import FeatureComplete from "./featureComplete"

const WishList = ({features, addFeature, commitFeature}) => {
    const [selectedItem, setSelectedItem] = useState("")

    if (features === undefined || features.length === 0) return

    const wishList = features.filter((x) => x.Commit === "")

    const commitFeatureAndClearSelection = (commitURL) => {
        commitFeature(selectedItem.Description, commitURL)
        setSelectedItem("")
    }

    return (
        <>
            <h3 className={"mb-3 " + style.subtitle}>WishList</h3>
            <FeatureAdd addFeature={addFeature} />
            <div className={"list-group overflow-auto shadow pt-1 container " + style.wishlist}>
                {wishList !== undefined ? wishList.map(feature => (
                    <div key={feature.Description}>
                        {feature === selectedItem ? <FeatureComplete commitFeatureAndClearSelection={commitFeatureAndClearSelection} /> : <a onClick={() => setSelectedItem(feature)} href="#" className="list-group-item list-group-item-action">{feature.Description}</a>}
                    </div>
                )) : ""}
            </div>
        </>
    )
}

export default WishList