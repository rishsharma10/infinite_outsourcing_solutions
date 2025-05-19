import mongoose from 'mongoose';

const HeroSectionSchema = new mongoose.Schema({
  title: String,
  description: String,
  company_description: String,
  image: String,
}, { timestamps: true });

export default mongoose.models.HeroSection || mongoose.model('HeroSection', HeroSectionSchema);
