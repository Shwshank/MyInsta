const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Image = new Schema({
  url:{
    type: String,
    required: true,
    unique: true
  },
  favUserId : {
    type : Array ,
    "default" : []
  }
});

const image = mongoose.model("image", Image);
module.exports = image
