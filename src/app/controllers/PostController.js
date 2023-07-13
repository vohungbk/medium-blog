const {
  multiMongooseToObject,
  mongooseToOject,
} = require('../../utils/common');
const Post = require('../models/Post');

class PostController {
  index(req, res, next) {
    Post.find({})
      .then((posts) => {
        res.render('post', { posts: multiMongooseToObject(posts) });
      })
      .catch(next);
  }
  show(req, res, next) {
    Post.findOne({ slug: req.params.slug })
      .then((post) => {
        console.log(post);
        res.render('post/show', { post: mongooseToOject(post) });
      })
      .catch(next);
  }
}

module.exports = new PostController();
