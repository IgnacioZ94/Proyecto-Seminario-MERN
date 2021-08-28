const express = require('express');
const router =  express.Router(); //Libreria de express usada para crear rutas

//Creamos una ruta a travez del get,  para dar una respuesta desde el servidor
router.get('/', (req, res) => {
    res.json({
        status: 'API Works!'
    });
});

module.exports = router;