const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../models/contactModel");

//@desc: Create new ContactUs
//@method: POST /api/contact
//@access: PubliC
const postContact = expressAsyncHandler (async(req, res)=>{
    const {name, age, gender, location, email, phone}= req.body;
    if(!name || !age || !gender || !location || !email || !phone){
        throw new Error('All filds are mandatory');
    }
    const postcontact = await contactModel.create(req.body);
    res.json(postcontact);
});

module.exports= {postContact}