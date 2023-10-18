const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const { studentRouter } = require("./routes/StudentRoute");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/student", studentRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error Connecting to MongoDB: ${error}`);
  }
  console.log("Server listening on port ", process.env.PORT);
});
