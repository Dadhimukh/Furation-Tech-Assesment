const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const homeRoute = require("./routes/home")
const books = require("./models/books")


const app = express();



// Connecting to database MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/BookStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });


// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"))


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());




// Routing
app.use("/", homeRoute)



// Server
app.listen(3000,()=>{
   console.log("Server is running on port : 3000")
})