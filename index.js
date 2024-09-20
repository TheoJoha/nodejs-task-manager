import express from "express"
import {router as taskManagerRouter} from "./taskManager/index.js"

const app = express()

app.use("/taskManager", taskManagerRouter)

app.get("/", (req, res) => res.redirect("/taskManager"))

app.listen(3003, () => {
    console.log("App is accessible at PORT 3003")
})