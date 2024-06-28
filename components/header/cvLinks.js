import cvLinks from "@/helpers/cvLinks"
import URLFormatter from "@/helpers/urlFormatter"

const CVLinks = () => {
    return (
        <>
            <table className="table">
                <tbody>
                    {cvLinks.map((cvLink, index) => (
                        <tr key={index}><td>{cvLink.name}</td><td><URLFormatter url={cvLink.url} /></td></tr>
                    ))}
                </tbody>
            </table>
        </>
        
    )
}

export default CVLinks