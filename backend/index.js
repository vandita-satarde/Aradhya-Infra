import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

import contactRoutes from "./routes/contactRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";

import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Increase timeout for large file uploads
app.use((req, res, next) => {
  req.setTimeout(300000); // 5 minutes
  res.setTimeout(300000); // 5 minutes
  next();
});

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/contact", contactRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/projects", projectRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/gallery", galleryRoutes);
app.use("/api/testimonials", testimonialRoutes);

app.get("/", (req, res) => res.send("API running"));

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
