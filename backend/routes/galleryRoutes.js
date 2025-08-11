// backend/routes/galleryRoutes.js
import express from 'express';
import { uploadGallery } from '../middleware/upload.js'; // path to the new uploader
import Gallery from '../models/galleryModel.js';

const router = express.Router();

router.post('/upload', uploadGallery.single('file'), async (req, res) => {
  try {
    const { type, location } = req.body;
    const url = req.file.path; // ✅ Cloudinary URL from new folder

    const newItem = new Gallery({ 
      type, 
      url, 
      location
    });
    
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error uploading gallery item:', error);
    res.status(500).json({ message: 'Error uploading gallery item' });
  }
});


router.get('/', async (req, res) => {
  try {
    const items = await Gallery.find().sort({ uploadedAt: -1 });
    res.json(items);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    res.status(500).json({ message: 'Error fetching gallery items' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Gallery.findByIdAndDelete(id);
    
    if (!deletedItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    res.status(500).json({ message: 'Error deleting gallery item' });
  }
});

export default router;
