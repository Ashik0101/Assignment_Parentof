const express = require("express");
const {
  insertStudentData,
  getStudentData,
} = require("../controller/StudentController");

const studentRouter = express.Router();

studentRouter.post("/", insertStudentData);
studentRouter.get("/", getStudentData);
module.exports = { studentRouter };
