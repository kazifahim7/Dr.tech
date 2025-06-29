import express from 'express'
import auth from '../../middleware/auth';
import { createDoctorServiceController } from './doctorService.controller';

const router = express.Router()

router.post("/services", auth("doctor"), createDoctorServiceController.createService)

router.patch("/services/:id", auth("doctor"), createDoctorServiceController.updateService)
router.delete("/services/:id", auth("doctor"), createDoctorServiceController.deleteService)

router.get("/", createDoctorServiceController.allDoctor)
router.get("/:id", createDoctorServiceController.singleDoctor)


export const doctorServiceRouter = router ;