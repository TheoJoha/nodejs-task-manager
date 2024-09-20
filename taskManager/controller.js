import {getAll} from "./model.js"
import {render} from "./view.js"

export async function listAction(req, res) {
    const data = await getAll()
    const body = render(data)
    res.send(data)
}