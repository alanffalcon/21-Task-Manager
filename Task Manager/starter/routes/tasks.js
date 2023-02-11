const express = require('express');
const router = express.Router();

//! Accedemos a los controls
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks')

//! Creamos las rutas
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

//! Exportamos el router
module.exports = router;