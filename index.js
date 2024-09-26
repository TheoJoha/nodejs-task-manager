import express from "express"
import morgan from "morgan"
import {dirname} from "path"
import {fileURLToPath} from "url"
import {createWriteStream} from "fs"

import {router as taskRouter} from "./task/index.js"


const app = express()

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`))

const accessLogStream = createWriteStream("access.log", {flags: "a"})
app.use(morgan("common", {
    immediate: true,
    stream: accessLogStream
}))

app.use(express.urlencoded({extended: false}))

app.use("/task", taskRouter)

app.get("/", (req, res) => res.redirect("/task"))

app.listen(3003, () => {
    console.log("App is accessible at PORT 3003")
})