// backend/routes/projectRoutes.js
import express from 'express';
import Project from '../models/projectModel.js';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure multer with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'aradhya-projects',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [{ width: 1000, height: 1000, crop: 'limit' }]
  }
});

const upload = multer({ storage: storage });
const router = express.Router();

// POST: Upload project with cloudinary images
router.post('/', upload.fields([
  { name: 'mainImage', maxCount: 1 },
  { name: 'sideImage1', maxCount: 1 },
  { name: 'sideImage2', maxCount: 1 }
]), async (req, res) => {
  try {
    console.log('Request body:', req.body);
    console.log('Files received:', req.files);

    const { 
      title, 
      location, 
      area, 
      rating, 
      reviewCount, 
      description, 
      tags, 
      facilities, 
      sonderStandard 
    } = req.body;

    // Create new project
    const newProject = new Project({
      title,
      location,
      area,
      rating: parseFloat(rating) || 0,
      reviews: parseInt(reviewCount) || 0,  // Note: schema uses 'reviews' not 'reviewCount'
      description,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      facilities: facilities ? (Array.isArray(facilities) ? facilities : [facilities]) : [],
      sonderStandard: sonderStandard ? (Array.isArray(sonderStandard) ? sonderStandard : [sonderStandard]) : [],
      // Get Cloudinary URLs
      mainImage: req.files?.mainImage?.[0]?.path,
      sideImage1: req.files?.sideImage1?.[0]?.path,
      sideImage2: req.files?.sideImage2?.[0]?.path
    });

    await newProject.save();
    res.status(201).json({ message: 'Project created successfully' });
  } catch (error) {
    console.error('❌ Backend Error:', error);
    res.status(500).json({ message: error.message || 'Internal Server Error' });
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

router.put('/:id', async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


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
