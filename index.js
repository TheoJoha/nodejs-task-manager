import express from "express"
import morgan from "morgan"
import {createWriteStream} from "fs"

import {router as taskManagerRouter} from "./taskManager/index.js"


const app = express()

const accessLogStream = createWriteStream("access.log", {flags: "a"})
app.use(morgan("common", {
    immediate: true,
    stream: accessLogStream
}))

app.use(express.urlencoded({extended: false}))

app.use("/task", taskManagerRouter)

app.get("/", (req, res) => res.redirect("/task"))

app.listen(3003, () => {
    console.log("App is accessible at PORT 3003")
})