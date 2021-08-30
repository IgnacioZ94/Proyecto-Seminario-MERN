const Task = require('../models/task');
const tasksCtrl = {};


tasksCtrl.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks)
};

tasksCtrl.createTask = async (req, res) => {
const { title, description } = req.body;
const task = new Task({title, description});
await task.save();
res.json({status: 'Task Saved'});
};



tasksCtrl.getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
};

tasksCtrl.updateTask = async (req, res) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: "Task Updated"});
};

tasksCtrl.deleteTask = async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: "Task Delete"});
};


module.exports = tasksCtrl;