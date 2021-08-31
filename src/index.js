const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
const { mongoose } = require('./database');


// Settings
//Definimos valor del puerto
app.set('port', process.env.PORT || 3000); 


// Middlewares-Funciones que se ejecutan antes de que lleguen a las rutas
app.use(morgan('dev')); //Morgan muestra peticiones del servidor por consola
app.use(cors());//Cors logra que dos servidores puedan intercambiar datos al mismo tiempo
app.use(express.json()); //Cada dato que pase por el servidor va a corroborar que el dato sea un formato Json


// Routes o URLs
//      ruta http       -      rutas locales de los js que contienen la logica de las rutas
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/tasks', require('./routes/task.routes'))


// Satatic files - Se busca el index.html a la carpeta public y se muestra en front
app.use(express.static(path.join(__dirname, 'public')));
//console.log(path.join(__dirname, 'public'));//Constante __dirname da la ruta del archivo


// Staring the server
app.listen(app.set('port'), () => { //Obetenemos valor del puerto
    console.log(`Servidor en puerto ${app.get('port')}`)
});