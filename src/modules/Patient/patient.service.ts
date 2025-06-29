import AppError from "../../Error/AppError";
import { UserModel } from "../user/user.model"
import bcrypt from 'bcrypt'
import { PatientModel } from "./patient.model";


const createPatientInToDB = async (payload: any) => {
     const { name, email, phone, password, ...patient } = payload
     const isExists = await UserModel.findOne({ email: email })
     if (isExists) {
          throw new AppError(500, "Already Exists");
     }
     const user = {
          name,
          email,
          phone,
          password,
          role: "user"
     }
     user.password = await bcrypt.hash(user.password, 10)

     // create 
     const createUser = await UserModel.create(user)
     let result;

     if (createUser) {
          patient.user = createUser?._id
          result = (await PatientModel.create(patient)).populate("user")
     }

     return result


}


export const patientService = {
     createPatientInToDB
}