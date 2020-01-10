const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true,
    max: 6000,
    min: 6
  }
});

module.exports = mongoose.model("Post", postSchema);
