const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aa6125405:HA39Nzfjsk9Og8mO@cluster0.dpuej6g.mongodb.net/Paytm");
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true, 
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength : 30
    },

    password : {
        type : String,
        required : true,
        minLength : 6
    },

    firstName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 50
    },

    lastName : {
        type : String,
        required : true,
        trim : true, 
        maxLength : 50
    }
});


const accoutSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },

    balance : {
        type : Number,
        required : true
    }
})
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accoutSchema);

module.exports = {
    User,
    Account
};