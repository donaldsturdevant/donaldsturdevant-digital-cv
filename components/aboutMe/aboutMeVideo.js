const Video = ({ video }) => {
    return (
        <iframe
            width="560" height="315"
            src={`${video.url}`}
            title={`${video.title}`}
        />
    )
}

export default Video