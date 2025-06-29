import express from 'express'
import { appointmentController } from './appointment.controller'
import auth from '../../middleware/auth'

const router = express.Router()

router.post("/appointments", auth("doctor","user"),appointmentController.createAppointment)
router.get("/patient/appointments", auth("doctor","user"),appointmentController.myAppointMent)
router.get("/doctor/appointments", auth("doctor"),appointmentController.doctorAppointMent)
router.patch("/doctor/appointments/:id/status", auth("doctor"),appointmentController.updateStatus)




export const appointRouter = router