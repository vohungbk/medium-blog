const newsRouter = require('./news');
const coursesRouter = require('./course');
const siteRouter = require('./site');
const postRouter = require('./post');

function routes(app) {
  app.use('/news', newsRouter);
  app.use('/course', coursesRouter);
  app.use('/post', postRouter);
  app.use('/', siteRouter);
}

module.exports = routes;
