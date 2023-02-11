const mongoose = require('mongoose');

//! Creamos la estructura de la DB
/*
const TaskSchema = new mongoose.Schema({
    name:String,
    completed:Boolean
})
*/

//! Validamos que no se envien objetos o variables vacias a la DB
//? Trim quita los espacions extra "  hola   " = "hola"

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide name'],
        trim: true,
        maxlength:[20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    }
})



module.exports = mongoose.model('Task', TaskSchema)