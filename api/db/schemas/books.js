const { model, Schema } = require("mongoose");

const books = new Schema({
  ISBN: String,
  BookTitle: String,
  BookAuthor: String,
  YearOfPublication: String,
  Publisher: String,
  ImageURLS: String,
  ImageURLM: String,
  ImageURLL: String,
});

module.exports = model("Books", books);
