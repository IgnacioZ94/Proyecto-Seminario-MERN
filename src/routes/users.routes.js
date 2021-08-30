const express = require('express');
const { get } = require('mongoose');
const router =  express.Router(); //Libreria de express usada para crear rutas

const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(createUser);
//Logica de get/post para notas, sin usar los controllers
//router.route('/')
//    .get((req, res) => res.json({message:'GET - Ruta Usuario'}))
//    .post((req, res) => res.send({message: 'POST - Ruta de Usuarios'}));

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);
//Logica de getID putID y deleteID para notas, sin usar los controllers
//router.route('/:id')
//    .get((req, res) => res.send({message: 'GET - Usuario ID'}))
//    .put((req, res) => res.send({message: 'UPDATE - Usuario ID'}))
//    .delete((req, res) => res.send({message: 'DELETE - Usuario ID'}))

module.exports = router;