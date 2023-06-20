const express = require("express");
const router = express.Router();
const book = require("../models/books");


router.get("/", (req, res, next) => {
  res.render("home");
});

router.post("/add", (req, res, next) => {
  const bookId = req.body.bookId;
  const bookName = req.body.bookName;
  const bookPrice = req.body.bookPrice;

  // console.log(bookId, bookName, bookPrice);

  const books = book.create({
    bookId,
    bookName,
    bookPrice,
  })


});
module.exports = router;
