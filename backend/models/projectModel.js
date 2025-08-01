// backend/models/projectModel.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  rating: Number,
  reviews: Number,
  facilities: [String],
  sonderStandard: [String],

  // Individual image fields
  mainImage: String,
  sideImage1: String,
  sideImage2: String,
}, { timestamps: true });


const Project = mongoose.model('Project', projectSchema);

export default Project;
