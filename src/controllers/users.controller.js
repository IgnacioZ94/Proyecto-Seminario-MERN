//const Task = require('../models/task');
const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({message:'GET - Ruta Usuario'});

usersCtrl.createUser = (req, res) => res.send({message: 'POST - Ruta de Usuarios'});

usersCtrl.getUser = (req, res) => res.send({message: 'GET - Usuario ID'});

usersCtrl.updateUser = (req, res) => res.send({message: 'UPDATE - Usuario ID'});

usersCtrl.deleteUser = (req, res) => res.send({message: 'DELETE - Usuario ID'});

module.exports = usersCtrl;