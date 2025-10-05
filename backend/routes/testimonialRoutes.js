import express from "express";
import Testimonial from "../models/testimonialModel.js";
import upload from "../middleware/upload.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// POST: Add new testimonial
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("POST /api/testimonials - Request received");
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);

    const { heading, paragraph, writtenBy } = req.body;

    // Validate required fields
    if (!heading || !paragraph || !writtenBy) {
      return res.status(400).json({
        message:
          "Missing required fields: heading, paragraph, and writtenBy are required",
      });
    }

    let imageUrl = "";

    // Upload image to Cloudinary if provided
    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "testimonials",
          resource_type: "image",
        });
        imageUrl = result.secure_url;
        console.log("Image uploaded to Cloudinary:", imageUrl);
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        return res.status(500).json({ message: "Error uploading image" });
      }
    }

    // Create new testimonial
    const newTestimonial = new Testimonial({
      heading: heading.trim(),
      paragraph: paragraph.trim(),
      writtenBy: writtenBy.trim(),
      image: imageUrl,
    });

    console.log("Creating new testimonial:", newTestimonial);

    await newTestimonial.save();
    console.log("Testimonial saved successfully:", newTestimonial._id);

    res.status(201).json({
      message: "Testimonial added successfully",
      testimonial: newTestimonial,
    });
  } catch (error) {
    console.error("Error adding testimonial:", error);

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ message: errors.join(", ") });
    }

    res.status(500).json({ message: "Server error while adding testimonial" });
  }
});

// GET: Fetch all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true }).sort({
      createdAt: -1,
    });

    res.status(200).json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ message: "Failed to fetch testimonials" });
  }
});

// GET: Fetch single testimonial by ID
router.get("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json(testimonial);
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    res.status(500).json({ message: "Failed to fetch testimonial" });
  }
});

// PUT: Update testimonial
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { heading, paragraph, writtenBy } = req.body;
    const testimonialId = req.params.id;

    const updateData = {
      heading: heading?.trim(),
      paragraph: paragraph?.trim(),
      writtenBy: writtenBy?.trim(),
    };

    // Handle image update if new image is provided
    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "testimonials",
          resource_type: "image",
        });
        updateData.image = result.secure_url;
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        return res.status(500).json({ message: "Error uploading image" });
      }
    }

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      testimonialId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json({
      message: "Testimonial updated successfully",
      testimonial: updatedTestimonial,
    });
  } catch (error) {
    console.error("Error updating testimonial:", error);

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ message: errors.join(", ") });
    }

    res
      .status(500)
      .json({ message: "Server error while updating testimonial" });
  }
});

// DELETE: Soft delete testimonial (set isActive to false)
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

    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    res.status(500).json({ message: "Failed to delete testimonial" });
  }
});

export default router;
