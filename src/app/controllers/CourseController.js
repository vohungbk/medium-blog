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

  create(req, res, next) {
    res.render('course/create');
  }

  store(req, res, next) {
    const formData = { ...req.body };
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const newCourse = new Course(formData);
    newCourse
      .save()
      .then(() => res.redirect('/'))
      .catch(next);
  }
}

module.exports = new CourseController();
