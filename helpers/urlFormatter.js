
const URLFormatter = ({ url, gitHub }) => {

    return url.startsWith("http") ? <a className="link-primary" href={"" + url + ""}>{gitHub === true ? getGitHubCommit(url) : url}</a> : url 

}

// if github url change display
const getGitHubCommit = (url) => {
    const regex = `https://github.com/.*/commit/(?<commit>.{7}).*`
    const result = url.match(regex)
    return (result == undefined || result.length !== 2 ? url : result[1] )
}

export default URLFormatter