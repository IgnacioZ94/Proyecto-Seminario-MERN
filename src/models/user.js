const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema ({
    username: { 
        type: String,
        required: true,
        trim: true,            //Propiedad trim limpia/acomoda el string
        unique: true           //Propiedad unique especifica que este username no debe repetirse en esta DB
    }
}, {
    timestamps: true
});

module.exports = model('User', UserSchema);