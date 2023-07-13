const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, default: '', maxLength: 255 },
    description: String,
    image: String,
    videoId: String,
    slug: { type: String, slug: 'name', unique: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('course', Course);
