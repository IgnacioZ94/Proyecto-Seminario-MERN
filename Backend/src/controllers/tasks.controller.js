const Task = require('../models/task');
const tasksCtrl = {};

//en los controladores codificamos la logica de cada petision del lado del cliente y
//respondemos del lado del servidor con diferentes logicas dependiendo la petision
tasksCtrl.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks)
};

tasksCtrl.createTask = async (req, res) => {
const { title, description, date, author } = req.body;
const newTask = new Task({
    title,
    description,
    date,
    author
});
await newTask.save();
res.json({status: 'Task Saved'});
};



tasksCtrl.getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
};

tasksCtrl.updateTask = async (req, res) => {
    const { title, description, date, author } = req.body;
    const newTask = {
        title, 
        description,
        date,
        author
    };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: "Task Updated"});
};

tasksCtrl.deleteTask = async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: "Task Delete"});
};


module.exports = tasksCtrl;