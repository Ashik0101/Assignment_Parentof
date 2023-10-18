const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  marks: Number,
  std: String,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
