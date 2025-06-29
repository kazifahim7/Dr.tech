import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { patientService } from "./patient.service";


const createPatient = catchAsync(async (req: Request, res: Response) => {
     const data = req.body;
     const result = await patientService.createPatientInToDB(data)

     res.status(200).json({
          success: true,
          message: "Patient registered successfully",
          data: result
     })


})


export const patientController = {
     createPatient
}