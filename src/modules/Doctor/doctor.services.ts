import jwt from 'jsonwebtoken';
import AppError from "../../Error/AppError";
import { UserModel } from "../user/user.model"
import bcrypt from 'bcrypt'
import { DoctorModel } from "./doctor.model";
import config from '../../config';

const createDoctorInToDB = async (payload: any) => {
     const { name, email, phone, password, ...doctor } = payload
     const isExists = await UserModel.findOne({ email: email })
     if (isExists) {
          throw new AppError(500, "Already Exists");
     }
     const user = {
          name,
          email,
          phone,
          password,
          role: "doctor"
     }
     user.password = await bcrypt.hash(user.password, 10)

     // create 
     const createUser = await UserModel.create(user)
     let result;

     if (createUser) {
          doctor.role = "doctor"
          doctor.user = createUser?._id
          result = (await DoctorModel.create(doctor)).populate("user")
     }

     return result


}

const loginFromDB = async (payload: { email: string, password: string }) => {
     const isExists = await UserModel.findOne({ email: payload.email })
     if (!isExists) {
          throw new AppError(404, "This user not Found");
     }

     const user = {
          email: isExists.email,
          role: isExists.role,
          id: isExists._id
     }

     //check password
     const isOk = await bcrypt.compare(payload.password, isExists.password)
     if(!isOk){
          throw new AppError(403, "Wrong password"); 
     }
     const accessToken = jwt.sign(user, config.jwt_secret as string ,{expiresIn:"7d"})

     return {
          accessToken
     }

}


export const doctorService = {
     createDoctorInToDB,
     loginFromDB
}