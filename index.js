import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("My first express application")
})

app.listen(3003, () => {
    console.log("App is accessible at PORT 3003")
})