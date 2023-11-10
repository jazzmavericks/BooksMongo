const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
title: {
    type: String,
    required: true,
    unique: true
},
author: {
    type: String,
    required: true
},
genre:{
    type: String,
    required: true
},
published:{
    type: Date,
    required: false,
    get: (date) => date.toLocaleDateString()
},
publisher:{
    type: String,
    required: false
},
description:{
    type: String,
    required: false,
    unique: true
},
price:{
    type: mongoose.Schema.Types.Decimal128,
    required: false
}
})

const Book = mongoose.model("book", bookSchema)

module.exports = Book