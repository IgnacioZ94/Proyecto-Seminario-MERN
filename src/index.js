const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
//Definimos valor del puerto
app.set('port', process.env.PORT || 3000); 

// Middlewares-Funciones que se ejecutan antes de que lleguen a las rutas
app.use(morgan('dev')); //Morgan muestra peticiones del servidor por consola
app.use(express.json()); //Cada dato que pase por el servidor va a corroborar que el dato sea un formato Json


// Routes o URLs
app.use('/api/tasks', require('./routes/task.routes'));

// Satatic files


// Staring the server
app.listen(app.set('port'), () => { //Obetenemos valor del puerto
    console.log(`Servidor en puerto ${app.get('port')}`)
});