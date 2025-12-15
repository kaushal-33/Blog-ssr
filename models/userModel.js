const { name } = require("ejs");
const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },
    userEmail: {
        type: String,
        require: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    userPassword: {
        type: String,
        require: true,
        minlength: 3,
    }
})

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;