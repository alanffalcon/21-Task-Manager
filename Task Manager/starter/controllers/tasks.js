//! Importamos la DB
const Task = require('../models/Task')

//! Importamos el middleware
const asyncWrapper = require('../middleware/async')
//? Error page
const {createCustomError} = require('../errors/custom-error')

//! Creamos los eventos
//? Ponemos el try y catch en async.js
const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({});   
    res.status(200).json({ tasks })
})

/*
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        
        res.status(200).json({ tasks })
        //res.status(200).json({ status: "success", data: { task, nbHits: tasks.length } })
        //res.status(200).json({ tasks, amount:task.length })
    } 
    catch (error) {
        res.status(500).json({msg: error})
    }
    //res.send('get all the tasks')
}
*/

/*
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(291).json({ task })
    } 
    catch (error) {
        res.status(500).json({msg: error})
    }
}
*/
const createTask = asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body)
    res.status(291).json({ task }) 
})

// id:req.params.id devuelve el nombre del query despues de task localhost3000/task/peter => peter
const getTask = asyncWrapper( async (req, res) => {
    
    const {id: taskID} = req.params
    const task = await Task.findOne({_id: taskID})

    if(!task){
        return next(createCustomError(`No task whit id: ${taskID}`, 404))
    }      
    
    res.status(200).json({task})
})

const deleteTask = asyncWrapper( async (req, res) => {
    
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID});
    
    if(!task){
        return next(createCustomError(`No task whit id: ${taskID}`, 404))
    }
    
    res.status(200).json({ task: null, status: 'success' })
        //res.status(200).send()
        //res.status(200).json({ task })
      
    //res.send('delete task')
})

const updateTask = asyncWrapper( async (req, res) => {

    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new: true, 
        runValidators:true,
    })

    if(!task){
        return next(createCustomError(`No task whit id: ${taskID}`, 404))
    }

    res.status(200).json({ task })

    //res.send('update task')
})

//! Exportamos
module.exports = {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask
}