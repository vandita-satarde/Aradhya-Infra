import express from "express";
import Testimonial from "../models/testimonialModel.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Get all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get testimonial by ID
router.get("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new testimonial
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const testimonialData = {
      name: req.body.name,
      position: req.body.position,
      company: req.body.company,
      message: req.body.message,
      rating: req.body.rating || 5,
      isActive: req.body.isActive !== undefined ? req.body.isActive : true,
    };

    if (req.file) {
      testimonialData.image = req.file.path;
    }

    const testimonial = new Testimonial(testimonialData);
    const savedTestimonial = await testimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update testimonial
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      position: req.body.position,
      company: req.body.company,
      message: req.body.message,
      rating: req.body.rating,
      isActive: req.body.isActive,
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json(testimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete testimonial (soft delete)
router.delete("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Permanently delete testimonial
router.delete("/permanent/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json({ message: "Testimonial permanently deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;