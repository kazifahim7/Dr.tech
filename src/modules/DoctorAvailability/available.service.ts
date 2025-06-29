import { DoctorAvailability } from "./available.model";
import { DoctorAvailabilityInput } from "./available.types";

const createAvailability = async (payload: DoctorAvailabilityInput) => {
     const result = await DoctorAvailability.create(payload)

     return result
}


export const availableService = {
     createAvailability
}