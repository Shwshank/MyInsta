var jwt = require('jsonwebtoken');
var db = require('../db/db');
var user = require('../model/userModel');
const config = require('../config/config')
const saltRounds = 8
const bcrypt = require('bcryptjs');

User = {

  registerUser: async function(data, uuid, bcrypt) {
    try{

       await new user({
        email: data.email,
        name: data.name,
        password: bcrypt.hashSync(data.password, saltRounds),
        id: uuid()
      }).save().then(res=>{
        resp = res
      }, err=>{
        console.log(err);
        resp = err
      })
      return resp
    } catch(err) {
      console.log(err);
      return err+""
    }
  },

  checkForExistingUser: async function(data) {
    try{

      let userExists
      await user.findOne({email: data}).then(res=>{
        if(res){
          userExists = res;
        }
      }, err=>{
        console.log(err);
      })
      return userExists
    } catch(err) {
      console.log(err);
    }
  },

  generateJWT: function(email) {

    return jwt.sign(
      { email: email },
      config.jwtSecret);
  },

  decodeJWT: function(token) {
    let msg = jwt.verify(token, config.jwtSecret, function(err, decoded) {
      if(err) {
        return false
      } else {
        return decoded.email
      }
    });
    return msg
  },

  updateProfile: async function (email, data) {

    if(data.password === "") {
      delete data['password']
    } else {
      data.password = bcrypt.hashSync(data.password, saltRounds)
    }

    console.log(data);
    let query = {email: email}
    return await user.findOneAndUpdate(query, data, {upsert:false}, function(err, doc){
      if (err) {
        console.log(err);
      }
      console.log(doc);
    });
  }

}

module.exports = User;
