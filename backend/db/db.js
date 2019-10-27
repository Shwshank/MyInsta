const mongoose = require('mongoose');
const config = require('../config/config')

const dbURI = config.dbURI+config.dbName

const options = {
  poolSize: 10,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
}

mongoose.connect(dbURI, options).then( res=>{
  console.log("connected to database");
}, err=>{
  console.log("error in connecting to database "+err);
});

module.exports = mongoose;

const user = require('../model/userModel')
