const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  bookId: {
    type: Number,
    required: true,
  },
  bookName: {
    type: String,
    required: true,
  },
  bookPrice: {
    type: Number,
    required: true,
  },
});

module.exports = ("book", booksSchema);
