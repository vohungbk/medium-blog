const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-updater');

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

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('course', Course);
