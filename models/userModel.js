const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add your username"],
    },
    email: {
        type: String,
        required: [true, "Please add your username"],
        unique: [true, "email address has already been taken"],
    },
    password: {
        type: String,
        required: [true, "Please add your password"],
    }
},{
    timestamps : true,
});

module.exports = mongoose.model("User", userScheme);