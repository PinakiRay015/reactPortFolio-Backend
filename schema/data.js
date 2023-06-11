const { default: mongoose } = require("mongoose");

const myForm = mongoose.Schema({
    name:
    {
        type: String,
        required: [true , 'please enter the name']
    } , 
    email:
    {
        type: String,
        required: [true , 'please enter the email']
    } , 
    msg:
    {
        type: String,
        required: [true , 'please enter your message']
    }
} , 
{
    timestamps: true
})

const formDB = mongoose.model("CONTACT" , myForm);
module.exports = formDB;