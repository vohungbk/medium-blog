module.exports = {
  multiMongooseToObject: function (mongooses) {
    return mongooses.map((item) => item.toObject());
  },
  mongooseToOject: function (mongoose) {
    return mongoose ? mongoose.toObject() : '';
  },
};
