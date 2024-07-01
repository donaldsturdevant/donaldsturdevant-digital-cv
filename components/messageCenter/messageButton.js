const Button = ({selectedMessage, selectMessage}) => {
    return (
        selectedMessage ? <button className="btn btn-primary mb-3 center" onClick={() => selectMessage(null)}>X</button> : ""
    )
}

export default Button