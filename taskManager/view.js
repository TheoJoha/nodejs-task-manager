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
            <thead><tr><th>Id</th><th>Title</th><th></th></tr></thead>
            <tbody>
                ${tasks
                    .map(task => `
                        <tr>
                            <td>${task.id}</td>
                            <td>${task.title}</td>
                            <td><a href="/task/delete/${task.id}">delete</a></td>
                        </tr>`
                    )
                    .join("")
                }
            </tbody>
        </table>
    </body>
    </html>
    `
}