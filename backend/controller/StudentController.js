const Student = require("../models/Student");

const insertStudentData = async (req, res) => {
  try {
    const { name, marks, std } = req.body;

    const studentData = new Student({
      name,
      marks,
      std,
    });

    await studentData.save();

    res.status(201).json({
      message: "Student data saved",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//get all student data

const getStudentData = async (req, res) => {
  try {
    const data = await Student.find({});

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { insertStudentData, getStudentData };
