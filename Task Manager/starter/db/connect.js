//! Usamos mongoose
const mongoose = require('mongoose')

//! Conexion a DB Mongodb Atlas

//! Funcion para conectar a la DB
const connectDB = (url) =>{
    
    //! Conectamos mongoose
    return mongoose
        .connect(url, {   
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        .then(() => console.log('CONNECTED TO THE DB...'))
        .catch((err) => console.log(err))
}

module.exports = connectDB;