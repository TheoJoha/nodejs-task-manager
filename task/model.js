import {Sequalize} from "sequalize"

const sequalize = new Sequalize({
    dialect: 'sqlite',
    storage: './task.db',
})

const Tasks = sequalize.define(
    'Tasks',
    {
        name: {
            type: Sequalize.STRING,
        },
        time: {
            type: Sequalize.INTEGER,
        }
    },
    {timestamps: false},
)

export function getAll() {
    return Tasks.findAll()
}

export function get(id) {
    return Tasks.findByPk(id)
}

export function remove(id) {
    return Tasks.destroy({where: {id}})
}

export function save(task) {
    return Tasks.upsert(task)
}