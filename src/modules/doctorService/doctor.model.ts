import mongoose, { Schema,  model } from 'mongoose';
import { IDoctorService } from './doctor.types';



const DoctorServiceSchema: Schema = new Schema<IDoctorService>(
     {


          doctor: {
               type: Schema.Types.ObjectId,
               required: true,
               ref:"User"
          },
          title: {
               type: String,
               required: true,
               trim: true,
          },
     
          description: {
               type: String,
               required: true,
          },
          price: {
               type: Number,
               required: true,
               min: 0,
          },
          duration: {
               type: Number,
               required: true,
               min: 1, 
          },
     },
     {
          timestamps: true,
     }
);

const DoctorServiceModel = model<IDoctorService>('DoctorService', DoctorServiceSchema);

export default DoctorServiceModel;
