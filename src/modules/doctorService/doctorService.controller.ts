import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { doctorService } from "./doctorService.service";

const createService = catchAsync(async (req: Request, res: Response) => {
     const data = req.body;
     const id = req?.user?.id
     data.doctor = id
     const result = await doctorService.createDoctorService(data)

     res.status(200).json({
          success: true,
          message: "Doctor service created successfully",
          data: result
     })


})
const updateService = catchAsync(async (req: Request, res: Response) => {
     const data = req.body;
     const result = await doctorService.updateDoctorService(data,req.params?.id, req.user?.id)

     res.status(200).json({
          success: true,
          message: "Doctor service updated successfully",
          data: result
     })


})
const deleteService = catchAsync(async (req: Request, res: Response) => {
     const data = req.body;
     const result = await doctorService.deleteServiceFromDB(req.params?.id, req.user?.id)

     res.status(200).json({
          success: true,
          message: "Doctor service deleted successfully",
          data: {}
     })


})
const allDoctor = catchAsync(async (req: Request, res: Response) => {
     const result = await doctorService.getAllDoctor(req.query)

     res.status(200).json({
          success: true,
          message: "Doctor retrieved successfully",
          data: result
     })


})
const singleDoctor = catchAsync(async (req: Request, res: Response) => {
     const result = await doctorService.getSinlgeDoctor(req.params?.id)

     res.status(200).json({
          success: true,
          message: "Doctor retrieved successfully",
          data: result
     })


})

export const createDoctorServiceController ={
     createService ,
     updateService,
     deleteService,
     allDoctor,
     singleDoctor
}