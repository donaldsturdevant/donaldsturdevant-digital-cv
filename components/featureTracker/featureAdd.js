import { useCallback, useState } from "react"

const FeatureAdd = ({addFeature}) => {
    const [newFeature, setNewFeature] = useState("")

    const addFeatureClick = () => {
        addFeature(newFeature)
        setNewFeature("")
    }

    return (
        <div className="row">
            <div className="col-10">
                <input
                    id="feature"
                    className="form-control"
                    type="text"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Add an item to the ToDo list"
                ></input>
            </div>
            <div className="col-2">
                <div className="float-right">
                    <button className="btn btn-primary float-end" onClick={addFeatureClick}>+</button>
                </div>
            </div>
        </div>
    )
}

export default FeatureAdd