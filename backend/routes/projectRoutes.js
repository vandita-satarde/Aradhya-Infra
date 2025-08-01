// backend/routes/projectRoutes.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import Project from '../models/projectModel.js';

const router = express.Router();

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // ensure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// POST: Create new project with images
router.post('/', upload.fields([
  { name: 'mainImage', maxCount: 1 },
  { name: 'sideImage1', maxCount: 1 },
  { name: 'sideImage2', maxCount: 1 },
]), async (req, res) => {
  try {
    const {
      title, location, rating, reviewCount,
      description, tags, facilities, sonderStandard
    } = req.body;

    const newProject = new Project({
      title,
      location,
      rating,
      reviewCount,
      description,
      tags: tags.split(',').map(tag => tag.trim()),
      facilities: Array.isArray(facilities) ? facilities : [facilities],
      sonderStandard: Array.isArray(sonderStandard) ? sonderStandard : [sonderStandard],
      mainImage: req.files?.mainImage?.[0]?.filename || '',
      sideImage1: req.files?.sideImage1?.[0]?.filename || '',
      sideImage2: req.files?.sideImage2?.[0]?.filename || '',
    });

    await newProject.save();
    res.status(201).json({ message: 'Project created successfully' });
  } catch (error) {
    console.error('Error saving project:', error.message);
    res.status(500).json({ message: 'Server Error' });
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


export default router;
