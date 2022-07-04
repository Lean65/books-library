const { model, Schema } = require("mongoose");

const users = new Schema({
  UserID: Number,
  Location: String,
  Age: Schema.Types.Mixed,
});

module.exports = model("Users", users);
