const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require:true,
        unique:true,
        lowercase:true
    },
    password:{
        type: String,
        require:true,
        select:false
    },
    createdAt:{
        type:Date,
        default: Date.now,
    }
}); 
const user = mongoose.model('User', userSchema);

module.exports = user;