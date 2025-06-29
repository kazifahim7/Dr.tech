import { model, Schema } from "mongoose";
import { TPatient } from "./patient.types";




const userSchema = new Schema<TPatient>({
     user: { type: Schema.Types.ObjectId, ref: "User" },
     age: { type: String, required: true },
     gender: { type: String, required: true },

}, { timestamps: true });


export const PatientModel = model<TPatient>('Patient', userSchema);