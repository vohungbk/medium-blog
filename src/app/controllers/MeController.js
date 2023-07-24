const { multiMongooseToObject } = require('../../utils/common');
const Course = require('../models/Course');

class MeController {
  storedCourses(req, res, next) {
    Course.find()
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: multiMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
