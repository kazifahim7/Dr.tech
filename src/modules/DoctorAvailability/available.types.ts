import { Types } from "mongoose";


export type TimeSlot = {
     startTime: string; 
     endTime: string;   
};


export type DayAvailability = {
     day: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
     timeSlots: TimeSlot[];
};


export type DoctorAvailabilityInput = {
     doctorId: string | Types.ObjectId;
     serviceId: string | Types.ObjectId;
     availability: DayAvailability[];
};


export interface DoctorAvailabilityDocument {
     doctorId: Types.ObjectId;
     serviceId: Types.ObjectId;
     day: string;
     timeSlots: TimeSlot[];
     createdAt?: Date;
     updatedAt?: Date;
}
