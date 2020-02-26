const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  username: {
    type: String
  },
  picture: {
    type: String
  },
  usercomment: {
    type: String
  }
});

//name of module is the singular version (comment) of the database name (comments)
module.exports = mongoose.model("comment", commentSchema);
