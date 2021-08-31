const mongoose = require('mongoose');
const { Schema } = mongoose; //Schema "modelo de datos", como queremos que sean nuestros datos

const TaskSchema = new Schema({
    title: { 
        type: String,
        required: true 
    }, 
    description: { 
        type: String,
        required: true 
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true  //Propiedad timestamps cada vez que se cree un dato va a agregar dos propiedades la fecha de creacion y la fecha de actualizacion  
});

module.exports = mongoose.model('Task', TaskSchema);