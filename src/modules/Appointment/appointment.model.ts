import { Schema, model } from "mongoose";
import { Appointment } from "./appointment.types";


const appointmentSchema = new Schema<Appointment>({
     doctorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
     serviceId: { type: Schema.Types.ObjectId, ref: "DoctorService", required: true },
     selectedDate: { type: String, required: true },
     timeSlot: {
          startTime: { type: String, required: true },
          endTime: { type: String, required: true },
     },
     status: {
          type: String,
          enum: ["pending", "pending", "cancel"],
          default: "pending",
     },
     patientId: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

export const AppointmentModel = model("Appointment", appointmentSchema);
