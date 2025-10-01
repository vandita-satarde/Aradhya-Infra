// backend/models/enquiryModel.js
import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Phone number must be exactly 10 digits",
      },
    },
    typeOfEnquiry: {
      type: String,
      enum: [
        "Plot Purchase",
        "Site Visit",
        "Investment Info",
        "Project Details",
      ],
    },
    projectType: {
      type: String,
      enum: ["Residential", "Commercial Investment"],
    },
    projectLocationInterested: { type: String },
    budgetRange: {
      type: String,
      enum: ["15 - 30 lakh", "30 - 50 lakh", "50 lakhs and above"],
    },
    planningToBuy: {
      type: String,
      enum: [
        "Immediately (Within 1 Month)",
        "Soon (1-3 Months)",
        "In 3-6 Months",
        "After 6 Months",
        "Just Exploring",
      ],
    },
    occupationType: {
      type: String,
      enum: [
        "Government Employee",
        "Self-Employed/Business",
        "Salaried (Private)",
        "Retired",
        "Other",
      ],
    },
    annualIncome: {
      type: String,
      enum: [
        "6 - 10 Lakhs",
        "10 - 20 Lakhs",
        "20 Lakhs & above",
        "Prefer not to say",
      ],
    },
    specificRequirements: { type: String, default: "" },
    declaration: { type: Boolean },
    date: { type: Date },

    // Legacy fields for backward compatibility
    interestedArea: { type: String },
    otherInterest: { type: String },

    // Admin fields
    adminRemark: { type: String, default: "" },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);
export default Enquiry;
