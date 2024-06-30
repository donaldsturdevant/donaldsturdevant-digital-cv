const Video = ({ video }) => {
    return (
        <iframe
            src={`${video.url}`}
            title={`${video.title}`}
        />
    )
}

export default Video