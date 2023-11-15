const mongoose = require("mongoose");
require("dotenv").config()

const connection = mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
})

module.exports = { connection }