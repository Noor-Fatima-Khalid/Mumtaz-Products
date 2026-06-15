const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

app.use(express.json());

app.listen(5000, () => {
  console.log("Server running on port 5000");
});