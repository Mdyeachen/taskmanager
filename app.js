const express = require("express");
require("dotenv").config();
const tasks = require("./router/tasks");
const connectDb = require("./db/connect");

const app = express();
const PORT = process.env.PORT || 5000;
const DBURL = process.env.MONGODB;

// middleware
app.use(express.static("./public"));
app.use(express.json());

// Router for task
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDb(DBURL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
