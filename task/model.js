import sqlite from "sqlite3"

const db = new sqlite.Database("./task.db")


export async function getAll() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM tasks';
        db.all(query, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

function insert(task) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO Tasks (name, time) VALUES (?, ?)'
        db.run(query, [task.name, task.time], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

function update(task) {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE Tasks SET name = ?, time = ? WHERE id = ?'
        db.run(query, [task.name, task.time, task.id], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

export async function get(id) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Tasks WHERE id = ?'
        db.get(query, [id], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

export async function save(task) {
    if (!task.id) {
        return insert(task)
    } else {
        return update(task)
    }
}
export async function remove(id) {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM Tasks WHERE id = ?'
        db.run(query, [id], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}
