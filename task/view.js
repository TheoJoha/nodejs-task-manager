export function render(tasks) {
    return  `
    <!DOCTYPE html> 
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Tasks list </title>
    </head>
    <body>
        <table>
            <thead><tr><th>Id</th><th>Title</th><th></th><th></th></tr></thead>
            <tbody>
                ${tasks
                    .map(task => `
                        <tr>
                            <td>${task.id}</td>
                            <td>${task.name}</td>
                            <td><a href="/task/delete/${task.id}">delete</a></td>
                            <td><a href="/task/form/${task.id}">edit</a></td>
                        </tr>`
                    )
                    .join("")
                }
            </tbody>
        </table>
        <a href="/task/form">new</a>
    </body>
    </html>
    `
}