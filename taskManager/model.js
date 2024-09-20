const data = [
    {id: 1, title: "Task 1"},
    {id: 2, title: "Task 2"},
    {id: 3, title: "Task 3"}
]

export function getAll() {
    return Promise.resolve(data)
}

export function removeId(id) {
    data = data.filter(task => task.id !== id)
    return Promise.resolve()
}