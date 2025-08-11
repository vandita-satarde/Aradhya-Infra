// backend/middleware/upload.js
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'project-images',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp']
  },
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

export const galleryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'gallery-uploads', // NEW FOLDER
    allowed_formats: ['jpg', 'png', 'jpeg', 'mp4', 'mov'],
    resource_type: 'auto', // Automatically handles images/videos
  },
});

export const uploadGallery = multer({ storage: galleryStorage });

export default upload;
