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
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('course/edit', { course: mongooseToOject(course) }),
      )
      .catch(next);
  }

  update(req, res, next) {
    const formData = { ...req.body };
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    Course.updateOne({ _id: req.params.id }, formData)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CourseController();
