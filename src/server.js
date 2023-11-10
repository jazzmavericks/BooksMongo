require("dotenv").config()
require("./db/connection")
const express = require('express') 
const app = express()

const port = 5000

const Book = require("./books/model")

const bookRouter = require("./books/routes")
const reviewRouter = require('./reviews/reviewRoutes');

app.use(express.json())

app.use(bookRouter)

app.use(reviewRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})



