import { model, Schema } from "mongoose";
import { DoctorTypes } from "./doctor.types";



const userSchema = new Schema<DoctorTypes>({
     user: { type: Schema.Types.ObjectId, ref: "User" },
     specialization: { type: String, required: true },
     hospitalName: { type: String, required: true },
     hospitalFloor: { type: String, required: true },

}, { timestamps: true });


export const DoctorModel = model<DoctorTypes>('Doctor', userSchema);