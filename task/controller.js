import {getAll, remove, get, save} from "./model.js"
import {render} from "./view.js"
import {render as form} from "./form.js"

export async function listAction(req, res) {
    const data = await getAll()
    const body = render(data)
    res.send(body)
}

export async function removeAction(req, res) {
    const id = parseInt(req.params.id, 10)
    await remove(id)
    res.redirect(req.baseUrl)
}

export async function formAction(req, res) {
    let task = {id: "", name: "", time: ""}

    if (req.params.id) {
        task = await get(parseInt(req.params.id, 10))
    }

    const body = form(task)
    res.send(body)
}

export async function saveAction(req, res) {
    const task = {
        id: req.body.id,
        name: req.body.name,
        time: req.body.time,
    }
    await save(task)
    res.redirect(req.baseUrl)
}