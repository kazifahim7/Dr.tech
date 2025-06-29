import express from 'express'
import { availableController } from './available.controller'
import auth from '../../middleware/auth'

const router = express.Router()

router.post('/create-availability',auth("doctor"),availableController.createAvailable)


export const availableRouter = router