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


// PUT: update admin remark
router.put('/:id/remark', async (req, res) => {
  try {
    const updated = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { adminRemark: req.body.adminRemark },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update remark' });
  }
});

// Toggle read/unread
router.put('/:id/read-toggle', async (req, res) => {
  try {
    const updated = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { isRead: req.body.isRead },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update read status' });
  }
});


// DELETE: Remove an enquiry
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Enquiry.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    res.status(200).json({ message: 'Enquiry deleted successfully' });
  } catch (err) {
    console.error('Error deleting enquiry:', err);
    res.status(500).json({ message: 'Failed to delete enquiry' });
  }
});



export default router;
