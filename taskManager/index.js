import {Router} from "express"

const router = Router()

const data = [
    {id: 1, title: "Task 1"},
    {id: 2, title: "Task 2"},
    {id: 3, title: "Task 3"}
]

router.get("/", (req, res) => {
    res.send(data)
})

export {router}