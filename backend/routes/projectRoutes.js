// backend/routes/projectRoutes.js
import express from 'express';
import Project from '../models/projectModel.js';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';
import dotenv from 'dotenv';

dotenv.config();

// Configure multer with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'aradhya-projects',
    resource_type: 'auto', // Automatically detect file type
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'tiff', 'svg', 'ico', 'avif', 'heic', 'heif'],
    transformation: [{ width: 1000, height: 1000, crop: 'limit', quality: 'auto', fetch_format: 'auto' }],
    public_id: (req, file) => {
      // Generate unique filename
      const timestamp = Date.now();
      const random = Math.round(Math.random() * 1E9);
      return `project_${timestamp}_${random}`;
    }
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Increased to 10MB limit per file
    files: 20 // Max 20 files
  },
  fileFilter: (req, file, cb) => {
    // Allow all image file types
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error(`File type ${file.mimetype} is not supported. Please upload image files only.`), false);
    }
  }
});

const router = express.Router();

// POST: Upload project with cloudinary images

router.post(
  '/', 
  (req, res, next) => {
    // Custom multer middleware with error handling
    upload.array('images', 20)(req, res, (err) => {
      if (err) {
        console.error('❌ Multer error:', {
          message: err.message,
          code: err.code,
          field: err.field
        });
        
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ message: 'File too large. Maximum size allowed is 10MB per file.' });
        } else if (err.code === 'LIMIT_FILE_COUNT') {
          return res.status(400).json({ message: 'Too many files. Maximum 20 files allowed.' });
        } else if (err.message.includes('File type')) {
          return res.status(400).json({ message: err.message });
        } else {
          return res.status(400).json({ message: `Upload error: ${err.message}` });
        }
      }
      next();
    });
  },
  async (req, res) => {
  try {
    console.log('=== NEW PROJECT REQUEST ===');
    console.log('Request body:', req.body);
    console.log('Files received:', req.files?.length || 0);
    
    // Log file details
    if (req.files && req.files.length > 0) {
      req.files.forEach((file, index) => {
        console.log(`File ${index + 1}:`, {
          originalName: file.originalname,
          mimeType: file.mimetype,
          size: `${(file.size / 1024).toFixed(2)} KB`
        });
      });
    }
    
    // Validate that we have images
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'At least one image is required' });
    }
    
    // Log Cloudinary config (without secrets)
    console.log('Cloudinary configured:', {
      cloud_name: process.env.CLOUDINARY_CLIENT_NAME ? 'SET' : 'NOT SET',
      api_key: process.env.CLOUDINARY_API_KEY ? 'SET' : 'NOT SET',
      api_secret: process.env.CLOUDINARY_API_SECRET ? 'SET' : 'NOT SET'
    });

    const { 
      title, 
      location, 
      area, 
      rating, 
      reviews, 
      description, 
      tags, 
      facilities, 
      sonderStandard 
    } = req.body;

    console.log('Received facilities:', facilities);
    console.log('Received sonderStandard:', sonderStandard);
    console.log('Files received:', req.files);

    // Handle array fields properly - FormData with [] suffix creates nested arrays
    const facilitiesArray = facilities ? 
      (Array.isArray(facilities) ? facilities : [facilities]).filter(f => f && f.trim() !== '') : [];
    
    const sonderStandardArray = sonderStandard ? 
      (Array.isArray(sonderStandard) ? sonderStandard : [sonderStandard]).filter(s => s && s.trim() !== '') : [];

    console.log('Processed facilitiesArray:', facilitiesArray);
    console.log('Processed sonderStandardArray:', sonderStandardArray);

    // Extract and validate Cloudinary URLs
    const imageUrls = req.files.map(file => file.path);
    console.log('Image URLs to save:', imageUrls);

    // Validate required fields
    if (!title || !location || !area) {
      return res.status(400).json({ message: 'Title, location, and area are required' });
    }

    // Create new project
    const newProject = new Project({
      title: title.trim(),
      location: location.trim(),
      area: area.trim(),
      rating: parseFloat(rating) || 0,
      reviews: parseInt(reviews) || 0,
      description: description ? description.trim() : '',
      tags: tags ? (Array.isArray(tags) ? tags : [tags]) : [],
      facilities: facilitiesArray,
      sonderStandard: sonderStandardArray,
      images: imageUrls // Store Cloudinary URLs
    });

    console.log('About to save project with data:', {
      title: newProject.title,
      location: newProject.location,
      area: newProject.area,
      rating: newProject.rating,
      reviews: newProject.reviews,
      facilities: newProject.facilities,
      sonderStandard: newProject.sonderStandard,
      imageCount: newProject.images.length,
      imageUrls: newProject.images
    });

    const savedProject = await newProject.save();
    console.log('✅ Project saved successfully:', savedProject._id);
    
    res.status(201).json({ 
      message: 'Project created successfully',
      project: {
        id: savedProject._id,
        title: savedProject.title,
        imageCount: savedProject.images.length
      }
    });
  } catch (error) {
    console.error('❌ Backend Error Details:');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Full error object:', JSON.stringify(error, null, 2));
    res.status(500).json({ 
      message: error.message || 'Internal Server Error',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined 
    });
  }
});


// GET: Fetch all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
});

router.put(
  '/:id',
  (req, res, next) => {
    upload.array('images', 20)(req, res, (err) => {
      if (err) {
        console.error('❌ Multer error:', err);
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ message: 'File too large. Max 10MB.' });
        }
        return res.status(400).json({ message: err.message });
      }
      next();
    });
  },
  async (req, res) => {
    try {
      // req.body will have text fields, req.files will have new uploaded images
      // Parse array fields correctly like in POST route
      const { title, location, area, rating, reviews, description, tags, facilities, sonderStandard, existingImages } = req.body;

      // Parse existingImages if sent as JSON string or array (adjust accordingly)
      // Note: Frontend sends existing images as 'existingImages[]', multer may parse them differently
      let existingImagesArray = [];
      if (existingImages) {
        if (typeof existingImages === 'string') {
          // If just one existing image URL sent
          existingImagesArray = [existingImages];
        } else if (Array.isArray(existingImages)) {
          existingImagesArray = existingImages;
        }
      }

      // Parse facilities & sonderStandard like in POST
      const facilitiesArray = facilities ? (Array.isArray(facilities) ? facilities : [facilities]) : [];
      const sonderStandardArray = sonderStandard ? (Array.isArray(sonderStandard) ? sonderStandard : [sonderStandard]) : [];

      // New uploaded images' URLs from Cloudinary
      const newImageUrls = req.files ? req.files.map(file => file.path) : [];

      // Combine old existing images with new uploaded images
      const finalImages = [...existingImagesArray, ...newImageUrls];

      // Prepare updated fields
      const updatedFields = {
        title,
        location,
        area,
        rating: rating ? parseFloat(rating) : 0,
        reviews: reviews ? parseInt(reviews) : 0,
        description,
        tags: tags ? (Array.isArray(tags) ? tags : [tags]) : [],
        facilities: facilitiesArray,
        sonderStandard: sonderStandardArray,
        images: finalImages,
      };

      // Remove undefined or empty strings from updatedFields if needed

      // Update project
      const updatedProject = await Project.findByIdAndUpdate(req.params.id, updatedFields, { new: true });

      if (!updatedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }

      res.status(200).json(updatedProject);
    } catch (error) {
      console.error('❌ Update project error:', error);
      res.status(500).json({ message: error.message });
    }
  }
);



// DELETE: Delete project by ID
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete project' });
  }
});


// GET: Fetch single project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch project' });
  }
});



export default router;
