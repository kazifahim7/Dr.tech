import { Types } from "mongoose"

export type TPatient = {
     user: Types.ObjectId,
     age: string,
     gender: string
}