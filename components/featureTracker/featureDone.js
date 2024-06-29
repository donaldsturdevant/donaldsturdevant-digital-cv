import style from "./featureTracker.module.css"
import useFeatures from "@/hooks/useFeatures"
import URLFormatter from "@/helpers/urlFormatter"

const DoneList = ({features}) => {

    if (features === undefined || features.length === 0) return

    const doneList = features.filter((x) => x.Commit !== "")

    return (
        <div>
            <h3 className={"mb-3 " + style.subtitle}>Done</h3>
            <div className="row mh-10">
            <table className={"table table-sm " + style.featuretable}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Commit</th>
                    </tr>
                </thead>
                <tbody>
                    {doneList !== undefined ? doneList.map(item => (
                        <tr key={item.Description + item.Commit}>
                            <td>{item.Description}</td>
                            <td><URLFormatter url={item.Commit} gitHub={true} /></td>
                        </tr>
                    )) : ""}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default DoneList