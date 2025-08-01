import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  topic: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
