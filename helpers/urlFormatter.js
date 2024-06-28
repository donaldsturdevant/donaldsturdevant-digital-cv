
const URLFormatter = ({url}) => {

    return url.startsWith("http") ? <a className="link-primary" href={"" + url + ""}>{url}</a> : url 

}

export default URLFormatter