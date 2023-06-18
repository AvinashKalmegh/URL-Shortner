const mongoose = require("mongoose");

const main = async()=>{
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/short-url");
    console.log("Connected to db");
}

module.exports = main;