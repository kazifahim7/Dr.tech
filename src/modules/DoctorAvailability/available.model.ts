import mongoose, { Schema, model } from "mongoose";
import { DoctorAvailabilityDocument } from "./available.types";


const timeSlotSchema = new Schema(
     {
          startTime: { type: String, required: true },
          endTime: { type: String, required: true },
     }
  
);


const doctorAvailabilitySchema = new Schema<DoctorAvailabilityDocument>({
     doctorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
     serviceId: { type: Schema.Types.ObjectId, ref: "DoctorService", required: true },
     day: { type: String, required: true },
     timeSlots: [timeSlotSchema], 
}, { timestamps: true });

export const DoctorAvailability = model("DoctorAvailability", doctorAvailabilitySchema);
