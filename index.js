import express from 'express';

const app = express();

// tell express to serve static files (css, js, etc..) from /public directory
app.use(express.static('public'))

// use EJS for server-side page rendering
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let todoData = {
        "todos": [
            {
                "body": "Test",
                "status": "active" // active, completed
            },
            {
                "body": "Completed",
                "status": "completed"
            },
            {
                "body": "Test 2",
                "status": "active"
            }
        ]
    };

    let completed = 0;
    let active = 0;
    todoData.todos.forEach( todo => {
        if (todo.status === "completed") {
            completed++;
        } else {
            active++;
        }
    });

    todoData.remaining = active;
    todoData.total = todoData.todos.length;
    res.render('index.ejs', todoData);
})

app.listen(3000, () => console.log("Server Up and running on port 3000"));
