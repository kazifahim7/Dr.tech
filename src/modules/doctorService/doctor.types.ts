import { Types } from "mongoose";

export interface IDoctorService {
     doctor: Types.ObjectId;
     title: string;
     description: string;
     price: number;
     duration: number;
}
