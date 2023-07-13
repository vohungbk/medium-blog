const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  title: { type: String, default: '', maxLength: 255 },
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('posts', Post);
