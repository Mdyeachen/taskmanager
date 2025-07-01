const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type : String,
    trim : true,
    required : [true, "much privide the name"],
    maxlength : [35, "name can't be more than 35 character"]
  },
  completed: {
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model("Task", taskSchema)