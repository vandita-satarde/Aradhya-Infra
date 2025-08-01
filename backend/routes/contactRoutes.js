import express from 'express';
import Contact from '../models/contactModel.js';

const router = express.Router();

// POST contact form submission
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, topic, message } = req.body;
    const newContact = new Contact({ firstName, lastName, email, topic, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET all contact submissions
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

export default router;
