const User = require('../models/user');
const usersCtrl = {};

//usersCtrl.getUsers = (req, res) => res.json({message:'GET - Ruta Usuarios'});
usersCtrl.getUsers = async (req, res) => {
    const user = await User.find();
    res.json(user)
};

//usersCtrl.createUser = (req, res) => res.send({message: 'POST - Ruta de Usuarios'});
usersCtrl.createUser = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json({status: 'User Saved'});
    };


//usersCtrl.getUser = (req, res) => res.send({message: 'GET - Usuario ID'});
usersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

//usersCtrl.updateUser = (req, res) => res.send({message: 'UPDATE - Usuario ID'});

//usersCtrl.deleteUser = (req, res) => res.send({message: 'DELETE - Usuario ID'});
usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: "User Delete"});
};
module.exports = usersCtrl;