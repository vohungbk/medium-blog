const { multiMongooseToObject } = require('../../utils/common');
const Course = require('../models/Course');

class MeController {
  storedCourses(req, res, next) {
    Course.find()
      .sort({ createdAt: -1 })
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: multiMongooseToObject(courses),
        }),
      )
      .catch(next);
  }

  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: multiMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
