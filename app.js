const http = require('http');
const express = require('express');
const ejs = require('ejs');
const app = express();
const hostname = 'localhost';
const port =  3000;
const invitation = require('./invitation');
let path = require('path');

app.set('view_engine','ejs');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/views/')))
app.set('views', __dirname + '/views/')
app.use('/assets', express.static(__dirname + '/views/assets'))
app.use('/fonts', express.static(__dirname + '/views'))
app.use('/js', express.static(__dirname + '/views'))
app.use('/img', express.static(__dirname + '/views'))
app.use('/invitation',invitation);

app.get('/', (req, res) => {
    return res.send('hello world');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})