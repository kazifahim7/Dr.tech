import express from 'express'
import { authController } from './doctor.controller';
import { patientController } from '../Patient/patient.controller';

const router = express.Router()

router.post("/register-doctor",authController.createUser)
router.post("/register-patient",patientController.createPatient)
router.post("/login",authController.login)



export const authRouter = router;