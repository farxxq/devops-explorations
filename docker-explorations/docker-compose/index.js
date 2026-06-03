const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_DIR = '/app/data';
const FILE = path.join(DATA_DIR, 'todos.txt');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Page
app.get('/', (req, res) => {
    fs.readFile(FILE, 'utf8', (err, data) => {
        const todos = data
            ? data.split('\n').filter(todo => todo.trim() !== '')
            : [];

        const todoList = todos
            .map(todo => `<li>${todo}</li>`)
            .join('');

        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Todo App</title>
            </head>
            <body>
                <h1>My Todo App</h1>

                <form action="/add-todo" method="POST">
                    <input
                        type="text"
                        name="todo"
                        placeholder="Enter a todo"
                        required
                    />
                    <button type="submit">Add Todo</button>
                </form>

                <h2>Todos</h2>
                <ul>
                    ${todoList}
                </ul>

                <p>
                    API Endpoint:
                    <a href="/todos">/todos</a>
                </p>
            </body>
            </html>
        `);
    });
});

// Add Todo
app.post('/add-todo', (req, res) => {
    const todo = req.body.todo;

    fs.appendFile(FILE, todo + '\n', err => {
        if (err) {
            return res.status(500).send('Error saving todo');
        }

        res.redirect('/');
    });
});

// Get all todos as JSON
app.get('/todos', (req, res) => {
    fs.readFile(FILE, 'utf8', (err, data) => {
        if (err) {
            return res.json([]);
        }

        const todos = data
            .split('\n')
            .filter(todo => todo.trim() !== '');

        res.json(todos);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});