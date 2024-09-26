let data = [
    {id: 1, name: "Task 1", time: 1},
    {id: 2, name: "Task 2", time: 2},
    {id: 3, name: "Task 3", time: 3}
]

function getNextId() {
    return Math.max(...data.map((task) => task.id)) + 1
}

function insert(task) {
    task.id = getNextId()
    data.push(task)
}

function update(task) {
    task.id = parseInt(task.id, 10)
    const index = data.findIndex((item) => item.id === task.id)
    data[index] = task
}

export function getAll() {
    return Promise.resolve(data)
}

export function getId(id) {
    return Promise.resolve(data.find((task) => task.id !== id))
}

export function remove(id) {
    data = data.filter(task => task.id !== id)
    return Promise.resolve()
}

export function save(task) {
    if (task.id === "") {
        insert(task)
    } else {
        update(task)
    }
    return Promise.resolve()
}