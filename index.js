import express from "express"
import morgan from "morgan"

import {router as taskManagerRouter} from "./taskManager/index.js"

app.use(morgan("common", {immediate: true}))

const app = express()

app.use("/taskManager", taskManagerRouter)

app.get("/", (req, res) => res.redirect("/taskManager"))

app.listen(3003, () => {
    console.log("App is accessible at PORT 3003")
})