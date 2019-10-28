const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
  email:{
    type: String,
    unique: true
  },
  name:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  date:{
    type: Date,
    required: true,
    default: Date.now
  },
  favImageId : {
    type : Array ,
    "default" : []
  }
});

const user = mongoose.model("user", User);
module.exports = user
