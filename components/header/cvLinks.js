import cvLinks from "@/helpers/cvLinks"

const CVLinks = () => {
    return (
        <>
            <table className="table">
                <tbody>
                    {cvLinks.map((cvLink, index) => (
                        <tr key={index}><td>{cvLink.name}</td><td>{cvLink.url}</td></tr>
                    ))}
                </tbody>
            </table>
        </>
        
    )
}

export default CVLinks