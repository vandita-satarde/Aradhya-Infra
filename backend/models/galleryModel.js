// backend/models/galleryModel.js

import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  type: {
    type: String, // 'image' or 'video'
    required: true,
  },
  url: {
    type: String, // Cloudinary URL
    required: true,
  },
  location: {
    type: String, // 'gallery' or 'gallerypage'
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;
