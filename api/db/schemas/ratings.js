const { model, Schema } = require("mongoose");

const ratings = new Schema({
  UserID: Number,
  ISBN: String,
  BookRating: Number,
});

module.exports = model("Ratings", ratings);
