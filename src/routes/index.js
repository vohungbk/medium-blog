const newsRouter = require('./news');
const coursesRouter = require('./course');
const siteRouter = require('./site');

function routes(app) {
  app.use('/news', newsRouter);
  app.use('/course', coursesRouter);
  app.use('/', siteRouter);
}

module.exports = routes;
