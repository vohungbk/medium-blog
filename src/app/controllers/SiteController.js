const Course = require('../models/Course');
const { multiMongooseToObject } = require('../../utils/common');
class SiteController {
  async index(req, res, next) {
    Course.find({})
      .sort({ createdAt: -1 })
      .then((courses) =>
        res.render('home', {
          courses: multiMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
