//! Seteamos exprees:
const express = require('express');
const app = express();

//! Conectamos a la DB
const connectDB = require('./db/connect')
require('dotenv').config()

//! Pagina Error
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//! Importamos el router
const tasks = require('./routes/tasks')

//! Middleware - para acceder a la data
app.use(express.static('./public'))
app.use(express.json())

//! Routes
//? api es por convencion y v1 es version1 (version del proyecto)
//? Callback function 
/*
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
});
*/

// Get all the tasks
app.use('/api/v1/tasks', tasks)

// Rura de error
app.use(notFound)
app.use(errorHandlerMiddleware)

//! Puerto
const port = process.env.PORT || 3000;

//! Conectamos a la db y si conecta escuchamos...

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`El servidor esta escuchando en el puerto ${port}...`));
    } 
    catch (error) {
        console.log(error)
    }
}

start()




