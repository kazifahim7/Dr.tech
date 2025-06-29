import express from 'express'
import { authRouter } from '../modules/Doctor/doctor.router'
import { doctorServiceRouter } from '../modules/doctorService/doctor.router'
import { availableRouter } from '../modules/DoctorAvailability/available.router'
import { appointRouter } from '../modules/Appointment/appointement.router'

const router = express.Router()

const moduleRouter = [
     {
          path: "/auth",
          route: authRouter
     },
     {
          path: "/doctor",
          route: doctorServiceRouter
     },
     {
          path: "/available",
          route: availableRouter
     },
     {
          path: "/appoint",
          route: appointRouter
     }
    
]


moduleRouter.forEach((route) => router.use(route.path, route.route))


export default router