import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { appointmentService } from "./appointment.service";

const createAppointment = catchAsync(async (req: Request, res: Response) => {
     const data = req.body;
     const id = req.user.id
     const result = await appointmentService.createAppointmentIntoDB(data, id)

     res.status(200).json({
          success: true,
          message: "Appointment created successfully",
          data: result
     })


})
const myAppointMent = catchAsync(async (req: Request, res: Response) => {
     const id = req.user.id
     const result = await appointmentService.myAppointMent(id)

     res.status(200).json({
          success: true,
          message: "Appointment retrieved successfully",
          data: result
     })


})
const doctorAppointMent = catchAsync(async (req: Request, res: Response) => {
     const id = req.user.id
     const result = await appointmentService.doctorAppointMent(id,req.query)

     res.status(200).json({
          success: true,
          message: "Appointment retrieved successfully",
          data: result
     })


})
const updateStatus = catchAsync(async (req: Request, res: Response) => {
     const id = req.user.id
     
     const result = await appointmentService.updateStatus(id,req.params.id,req.body)

     res.status(200).json({
          success: true,
          message: "Appointment status update successfully",
          data: result
     })


})



export const appointmentController ={
     createAppointment,
     myAppointMent,
     doctorAppointMent,
     updateStatus
}