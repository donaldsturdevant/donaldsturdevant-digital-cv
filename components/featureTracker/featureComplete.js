const { useState } = require("react")

const FeatureComplete = ( { commitFeatureAndClearSelection }) => {
    const [commitURL,setCommitURL] = useState("")

    return (
        <input
            autoFocus
            id="commitURL"
            className="form-control"
            type="text"
            value={commitURL}
            onChange={(e) => setCommitURL(e.target.value)}
            onBlur={() => { commitFeatureAndClearSelection(commitURL) }}
            placeholder="Paste the github commit url to mark this as done"
        ></input>
    )
}

export default FeatureComplete