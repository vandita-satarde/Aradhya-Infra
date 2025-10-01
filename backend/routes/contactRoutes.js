import express from 'express';
import Contact from '../models/contactModel.js';

const router = express.Router();

// POST contact form submission
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, number, message } = req.body;
    const newContact = new Contact({ firstName, lastName, email, number, message });
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


// DELETE: Remove a contact entry
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error('Error deleting contact:', err);
    res.status(500).json({ message: 'Server error while deleting contact' });
  }
});

// PUT: Update a contact entry
router.put('/:id', async (req, res) => {
  try {
    const { firstName, lastName, email, topic, message } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, topic, message },
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json(updatedContact);
  } catch (err) {
    console.error('Error updating contact:', err);
    res.status(500).json({ message: 'Server error while updating contact' });
  }
});


export default router;
