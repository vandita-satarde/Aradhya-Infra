import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();

// POST contact form submission
router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      address,
      status,
      mobileNumber,
      gender,
      pinCode,
      city,
      email,
      preferredCommunication,
    } = req.body;

    // Validate required fields
    const requiredFields = [
      "fullName",
      "dateOfBirth",
      "address",
      "status",
      "mobileNumber",
      "gender",
      "pinCode",
      "city",
      "email",
      "preferredCommunication",
    ];

    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Additional validation
    if (!/^\d{10}$/.test(mobileNumber)) {
      return res
        .status(400)
        .json({ message: "Mobile number must be 10 digits" });
    }

    if (!/^\d{6}$/.test(pinCode)) {
      return res.status(400).json({ message: "Pin code must be 6 digits" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res
        .status(400)
        .json({ message: "Please enter a valid email address" });
    }

    const newContact = new Contact({
      fullName,
      dateOfBirth,
      address,
      status,
      mobileNumber,
      gender,
      pinCode,
      city,
      email,
      preferredCommunication,
    });

    await newContact.save();
    res.status(201).json({
      message: "Contact saved successfully",
      contact: newContact,
    });
  } catch (err) {
    console.error("Error saving contact:", err);
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ message: errors.join(", ") });
    }
    res.status(500).json({ message: "Server error while saving contact" });
  }
});

// GET all contact submissions
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contacts" });
  }
});

// DELETE: Remove a contact entry
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error("Error deleting contact:", err);
    res.status(500).json({ message: "Server error while deleting contact" });
  }
});

// PUT: Update a contact entry
router.put("/:id", async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      address,
      status,
      mobileNumber,
      gender,
      pinCode,
      city,
      email,
      preferredCommunication,
    } = req.body;

    // Additional validation for update
    if (mobileNumber && !/^\d{10}$/.test(mobileNumber)) {
      return res
        .status(400)
        .json({ message: "Mobile number must be 10 digits" });
    }

    if (pinCode && !/^\d{6}$/.test(pinCode)) {
      return res.status(400).json({ message: "Pin code must be 6 digits" });
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res
        .status(400)
        .json({ message: "Please enter a valid email address" });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        fullName,
        dateOfBirth,
        address,
        status,
        mobileNumber,
        gender,
        pinCode,
        city,
        email,
        preferredCommunication,
      },
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({
      message: "Contact updated successfully",
      contact: updatedContact,
    });
  } catch (err) {
    console.error("Error updating contact:", err);
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ message: errors.join(", ") });
    }
    res.status(500).json({ message: "Server error while updating contact" });
  }
});

export default router;
