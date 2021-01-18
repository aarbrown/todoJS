import express from 'express';

const app = express();

// tell express to serve static files (css, js, etc..) from /public directory
app.use(express.static('public'))

// use EJS for server-side page rendering
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(3000, () => console.log("Server Up and running on port 3000"));
