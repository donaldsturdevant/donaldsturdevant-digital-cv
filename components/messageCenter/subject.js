const Subject = ({subject}) => {
    return (
        <div>{subject ? subject : "(no " + subject + ")"}</div>
    )
}

export default Subject