// backend/models/projectModel.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  area:String,
  tags: [String], 
  rating: Number,
  reviews: Number,
  facilities: [String],
  sonderStandard: [String],

  images: {
    type: [String],
    required: [true, 'At least one image is required'],
    validate: {
      validator: function(arr) {
        return arr && arr.length > 0;
      },
      message: 'At least one image URL is required'
    }
  }
}, { timestamps: true });


const Project = mongoose.model('Project', projectSchema);

export default Project;
