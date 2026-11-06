import express from 'express'

import upload from '../config/upload.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'
import Belajarcontroller from '../controllers/belajar.controller.js'
import { logMiddleware } from '../middleware/log.middleware.js'
const router = express.Router()

router.use(logMiddleware) 


router.get('/belajar', Belajarcontroller.index)
router.get('/belajar', Belajarcontroller.index)          
router.get('/belajar/:id', Belajarcontroller.show)       
router.post('/belajar', Belajarcontroller.store)         
router.put('/belajar/:id', Belajarcontroller.update)
router.patch('/belajar/:id', Belajarcontroller.update)
router.delete('/belajar/:id', Belajarcontroller.delete)

export default router
