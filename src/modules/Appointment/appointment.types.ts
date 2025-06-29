import { Types } from "mongoose"

export type Appointment = {
     doctorId: Types.ObjectId,
     serviceId: Types.ObjectId,
     selectedDate: string,
     timeSlot: {
          startTime: string,
          endTime: string
     },
     status: "pending" | "accept" | "cancel",
     patientId: Types.ObjectId | string
}