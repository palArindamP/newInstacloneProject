const mongoose = require("mongoose");

// creating schema for fetching data from landing page form

const schema = new mongoose.Schema({
    fileName: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    postedAt: {
        type: String,
        default: () => new Date().toString().split('T')[0]
    },
    likes: Number
})

const collection = mongoose.model("collection", schema);

module.exports = collection;