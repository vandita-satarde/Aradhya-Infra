// backend/routes/enquiryRoutes.js
import express from 'express';
import Enquiry from '../models/enquiryModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Error saving enquiry:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET all enquiries
router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch enquiries' });
  }
});

export default router;
