import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { doctorService } from "./doctor.services";

const createUser = catchAsync(async (req: Request, res: Response) => {
     const data = req.body;
     const result = await doctorService.createDoctorInToDB(data)

     res.status(200).json({
          success: true,
          message: "Doctor registered successfully",
          data: result
     })


})
const login = catchAsync(async (req: Request, res: Response) => {
     const data = req.body;
     const result = await doctorService.loginFromDB(data)

     res.status(200).json({
          success: true,
          message: "login successfully",
          data: result
     })


})




export const authController = {
     createUser,
     login
}