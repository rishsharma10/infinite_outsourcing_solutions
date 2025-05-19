import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IServices extends Document {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy:any;
  image:string
}

const ServiceSchema = new Schema<IServices>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: String,
    createdBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  
  { timestamps: true }
);

const Services = models.Services || model<IServices>('Services', ServiceSchema);

export default Services;
