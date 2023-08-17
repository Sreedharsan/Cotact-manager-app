const asynchandler = require("express-async-handler");
const Contact = require("../models/contactModel"); 


const getcontacts = asynchandler(async(req,res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

const createcontact = asynchandler(async (req,res) => {
    console.log("The request body is:", req.body); 
    const{name,email,Phone} = req.body;
    if(!name ||!email ||!Phone){
        res.status(400);
        throw new Error("All Fields are required");
    }
    const contact = await Contact.create({
        name,
        email,
        Phone,
        user_id : req.user.id
    });
    
    res.status(201).json(contact);
});


const getcontact = asynchandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found!");
    }
    res.status(200).json(contact)
});




const updatecontact =asynchandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found!");
    }

    if(contact.user_id.toString()!==req.user.id){
        res.status(403);
        throw new Error("user don't have permission to update other contacts");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.status(200).json(updatedContact);
});

const deletecontact = asynchandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found!");
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(403);
        throw new Error("user don't have permission to update other contacts");
    }

    await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);
});




module.exports = {
    getcontacts,
    createcontact,
    getcontact,
    updatecontact,
    deletecontact
};
