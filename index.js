const express = require("express");
const app = express();
const port = 3000;

const { engine } = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('login');
});


app.get('/home', (req, res) => {
    res.render('home');
});


app.get('/signup', (req, res) => {
    res.render('signup');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})