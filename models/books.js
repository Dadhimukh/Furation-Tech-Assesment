const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const bookSchema = new Schema({
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

module.exports = mongoose.model("Book", bookSchema);
