//Index.js
//NODE program for handling the basic informational website

const express = require("express");
const path = require("path");
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'))
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact.html'))
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/404.html'))
});

app.listen(8080, () => {
    console.log('Running app...')
});