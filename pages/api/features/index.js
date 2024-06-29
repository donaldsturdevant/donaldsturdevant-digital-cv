import path from "path"
import fs from "fs"

const { promisify } = require("util")
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
new Promise((resolve) => setTimeout(resolve))

export default async function handler(req, res) {
    const method = req?.method
    const body = req?.body
    const jsonFile = path.resolve("./", "features.json")

    console.log(method)
    console.log(body)

    switch (method) {
        case "GET":
            const readFileData = await readFile(jsonFile)
            const features = JSON.parse(readFileData).features
            res.setHeader("Content-Type", "application/json")
            res.status(200).send(JSON.stringify(features,null,4))
            break
        case "POST":
            console.log("debug 1")
            writeFile(jsonFile,JSON.stringify(body,null,4))
            console.log("debug 2")
            res.status(200).json({ "features": body })
            console.log("debug 3")
            break
        default:
            res.setHeader("Allow", ["GET","POST"])
            res.status(405).end("Method " + method + " Not Allowed")
    }
}