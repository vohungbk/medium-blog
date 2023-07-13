const Course = require('../models/Course');
const { mongooseToOject } = require('../../utils/common');

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('course/show', { course: mongooseToOject(course) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
