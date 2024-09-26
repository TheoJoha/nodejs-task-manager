export function render(task) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Task list</title>
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <form action="/task/save" method="post">
            <input type="hidden" id="id" name="id" value="${task.id}" />
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value="${task.name}" />
            </div>
            <div>
                <label for="id">Time:</label>
                <input type="text" id="time" name="time" value="${task.time}" />
            </div>
            <div>
                <button type="submit">save</button>
            </div>
        </form>
    </body>
    </html>
    `
}