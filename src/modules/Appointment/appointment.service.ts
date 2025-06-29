import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../Error/AppError";
import { DoctorAvailability } from "../DoctorAvailability/available.model";
import { AppointmentModel } from "./appointment.model";
import { Appointment } from "./appointment.types";

export const createAppointmentIntoDB = async (payload: Appointment, id: string) => {
     const availability = await DoctorAvailability.findOne({
          doctorId: payload.doctorId,
          serviceId: payload.serviceId,
          day: new Date(payload.selectedDate).toLocaleString("en-US", { weekday: "long" }),
          timeSlots: {
               $elemMatch: {
                    startTime: payload.timeSlot.startTime,
                    endTime: payload.timeSlot.endTime,
               }
          },
     });

     if (!availability) {
          throw new AppError(400, "This time slot is not available for this doctor/service.");
     }

     // Step 2: Check if that time slot is already booked
     const isBooked = await AppointmentModel.findOne({
          doctorId: payload.doctorId,
          selectedDate: payload.selectedDate,
          "timeSlot.startTime": payload.timeSlot.startTime,
          "timeSlot.endTime": payload.timeSlot.endTime,
          status: { $in: ["pending", "accept"] }
     });

     if (isBooked) {
          throw new AppError(409, "This time slot is already booked. try another slot or another day");
     }

     // Step 3: Create appointment
     payload.patientId = id;
     const newAppointment = await AppointmentModel.create(payload);
     return newAppointment;
};


const myAppointMent = async (id: string) => {
     const result = await AppointmentModel.findOne({ patientId: id }).populate("patientId serviceId doctorId")

     return result
}
const doctorAppointMent = async (id: string, query: Record<string, unknown>) => {
     const appointmentQuery = new QueryBuilder(AppointmentModel.find({ doctorId: id }), query).filter()
     const result = await appointmentQuery.modelQuery

     return result
}
const updateStatus = async (id: string, appointId: string, payload: { status: string }) => {

     const isAppointmentIsExist = await AppointmentModel.findById(appointId)
     if (!isAppointmentIsExist) {
          throw new AppError(404, "this appoint not available");

     }
     else if (isAppointmentIsExist.doctorId.toString() !== id) {
          throw new AppError(404, "This appoint not yours , don't try second time");
     }

     const result = await AppointmentModel.findByIdAndUpdate(appointId, payload, { new: true })
     return result




}



export const appointmentService = {
     createAppointmentIntoDB,
     myAppointMent,
     doctorAppointMent,
     updateStatus
}