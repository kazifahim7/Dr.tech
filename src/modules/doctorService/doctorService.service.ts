import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../Error/AppError";
import { DoctorModel } from "../Doctor/doctor.model";
import { DoctorAvailability } from "../DoctorAvailability/available.model";
import DoctorServiceModel from "./doctor.model";
import { IDoctorService } from "./doctor.types";

const createDoctorService = async (payload: IDoctorService)=>{
     const result = (await DoctorServiceModel.create(payload)).populate("doctor")
     return result
}


const updateDoctorService = async (payload: Partial<IDoctorService>,id:string, ownerId:string)=>{
     const isExists = await DoctorServiceModel.findById(id)
     if(!isExists){
          throw new AppError(404,"this service not found sir ...");    
     }
     if (isExists.doctor.toString() !== ownerId) {
          throw new AppError(403, "You are not authorized to update this service.");
     }
     const result = await DoctorServiceModel.findByIdAndUpdate(id,payload,{new:true})

     return result
     
}
const deleteServiceFromDB = async (id:string, ownerId:string)=>{
     const isExists = await DoctorServiceModel.findById(id)
     if(!isExists){
          throw new AppError(404,"this service not found sir ...");    
     }
     if (isExists.doctor.toString() !== ownerId) {
          throw new AppError(403, "You are not authorized to update this service.");
     }
     const result = await DoctorServiceModel.findByIdAndDelete(id,{new:true})

     return result
     
}

const getAllDoctor =async(query:Record<string,unknown>)=>{
     const allDoctor = new QueryBuilder(DoctorModel.find().populate("user"), query).filter()
     const result = await allDoctor.modelQuery
     return result
}
const getSinlgeDoctor =async(id:string)=>{
     const result = await DoctorAvailability.findOne({ doctorId: id }).populate("serviceId doctorId")
     return result
    
}



export const doctorService ={
     createDoctorService,
     updateDoctorService,
     deleteServiceFromDB,
     getAllDoctor,
     getSinlgeDoctor
}