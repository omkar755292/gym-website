const ContactUs = require("../models/contactModel");
const asyncHandler = require('express-async-handler');
//@desc: Create new ContactUs
//@method: POST /api/contact
//@access: PubliC
const createContactUs = asyncHandler( async (req, res)=>{
    console.log(req.body);
    const {name, age, gender, location, email, phone}= req.body;
    if(!name || !age || !gender || !location || !email || !phone){
        res.status(400);
        throw new Error('All filds are mandatory');
    }
    const create = await ContactUs.create({
        name, age, gender, location, email, phone
    });
    res.status(201).json(create);
});

module.exports = createContactUs;