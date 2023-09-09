const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{type: String, require: true },
    age:{type: String, require: true },
    gender:{type: String, require: true },
    location:{type: String, require: true },
    email:{type: String, require: true, unique: false },
    phone:{type: String, require: true },
},
{
    timestamp: true
});

const contactModel = mongoose.model('contact', contactSchema);

module.exports = contactModel;

