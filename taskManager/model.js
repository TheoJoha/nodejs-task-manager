let data = [
    {id: 1, name: "Task 1", time: 1},
    {id: 2, name: "Task 2", time: 2},
    {id: 3, name: "Task 3", time: 3}
]

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