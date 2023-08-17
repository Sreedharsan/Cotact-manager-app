const mongoose = require("mongoose"); 

const contactSchema = mongoose.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId ,
        required: true,
        ref: "user",
    },
    name:{
        type: String,
        require: [true, "Please add your name!"],
    },
    email:{
        type: String,
        require: [true, "Please add your email!"],
    },
    Phone:{
        type: String,
        require: [true, "Please add your Phone Number!"],
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model("Contact", contactSchema);