const request = require('supertest')
const express = require('express')
const http = require('http')
const path = require('path')
const fetch = require('node-fetch')
const async = require('express-async-await')

const app = express()
app.use(express.json())

app.get("/comments", (req, res, next) => {
    //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(response => response.json())
    .then(json => res.send(json))
});

app.get("/photos", (req, res, next) => {
    //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(response => response.json())
    .then(json => res.send(json))
});

app.get("/albums", (req, res, next) => {
    //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    fetch("https://jsonplaceholder.typicode.com/users/1/albums")
    .then(response => response.json())
    .then(json => res.send(json))
});

app.get("/todos", (req, res, next) => {
    //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    .then(response => response.json())
    .then(json => res.send(json))
});

app.get("/posts", (req, res, next) => {
    //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then(response => response.json())
    .then(json => res.send(json))
});


app.listen(3000, () => {
    console.log("Server running on port 3000")
})

module.exports = app;