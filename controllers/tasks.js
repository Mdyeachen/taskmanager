const Task = require("../models/tasks");

// get all task controller
const getAllTask = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// create a task controller
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// get single task controller
const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const singleTask = await Task.findOne({ _id: taskId });
    if (!singleTask) {
      return res
        .status(404)
        .json({ message: `No task with ${taskId} Id is found` });
    }
    res.status(200).json({ singleTask });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// update task controller
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
      new : true,
      runValidators : true
    });
    if (!task) {
      return res.status(404).json({ message: `Dosen't found ${taskId} id` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// delete task controller
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskId });
    if (!taskId) {
      return res.status(404).json({ message: `Dosen't found ${taskId} id` });
    }
    res.status(200).json({ message: "Task deleted successfully", task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
