const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  });
  
  const ContactUs = mongoose.model('ContactUs', contactUsSchema);
  
  module.exports = ContactUs;