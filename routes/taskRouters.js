import express from 'express'
import { TaskController } from '../controllers/Taskcontroller.js'
export const router = express.Router()

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/view/:id', TaskController.viewTask)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit', TaskController.updateTask)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/', TaskController.showTasks)



