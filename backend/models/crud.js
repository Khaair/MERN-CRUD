const mongoose = require("mongoose");
const { Schema } = mongoose;

const crudSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  body: {
    type: String,
    required: [true, "Body is required"],
  },
  file: {
    type: String,
    required: [true, "Image is required"],
  },
});

crudSchema.path("title").validate(function (value) {
  return value.length <= 100;
}, "Title length should be less than or equal to 100 characters");

crudSchema.path("author").validate(function (value) {
  return value.length <= 50;
}, "Author length should be less than or equal to 50 characters");

crudSchema.path("body").validate(function (value) {
  return value.length <= 1000;
}, "Body length should be less than or equal to 1000 characters");

crudSchema.post("save", function (error, doc, next) {
  if (error.name === "ValidationError") {
    next(new Error(error.message));
  } else {
    next();
  }
});

module.exports = mongoose.model("crud", crudSchema);
