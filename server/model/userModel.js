const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  picture: {
    type: String
  },
  pw: {
    type: String
  },
  favorites: {
    type: Array
  }
});

module.exports = mongoose.model("user", userSchema);
