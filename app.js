const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies for form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/opinions', (req, res) => {
    res.render('index');
});

app.get('/flip-coin', (req, res) => {
    res.render('flipCoin');
});

app.post('/opinions', (req,res) => {
    const numOpinions = req.body.numOpinions;
    res.render('opinions', {numOpinions});
})

app.post('/random-opinion', (req, res) => {
    const opinions = req.body.opinions;
    const randomOpinion = opinions[Math.floor(Math.random() * opinions.length)];
    res.render('randomOpinion', { randomOpinion });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
