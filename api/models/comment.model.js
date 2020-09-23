const { Schema, model } = require("mongoose");

const commentSchena = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    defaultL: Date.now
  },
  postId: {
    ref: "posts",
    type: Schema.Types.ObjectId
  }
});

module.exports = model("comments", commentSchena);
