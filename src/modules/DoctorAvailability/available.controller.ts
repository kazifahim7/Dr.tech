import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { availableService } from "./available.service";

const createAvailable = catchAsync(async (req: Request, res: Response) => {
     const data = req.body;
    
     const result = await availableService.createAvailability(data)

     res.status(200).json({
          success: true,
          message: "Doctor availability created successfully",
          data: result
     })


})

export const availableController ={
     createAvailable
}