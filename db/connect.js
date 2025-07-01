const mongoose = require("mongoose");

const connectDb = (url) => {
  mongoose.connect(url).then(() => console.log("Connect Database .."));
};

module.exports = connectDb;
