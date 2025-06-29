import { Types } from "mongoose"

export type DoctorTypes = {
     user: Types.ObjectId,
     specialization: string,
     hospitalName: string,
     hospitalFloor: string,
     service?: Types.ObjectId,
}