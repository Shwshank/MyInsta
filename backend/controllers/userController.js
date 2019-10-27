var userService = require('../services/userServices')
const uuid = require('uuid/v4');
const bcrypt = require('bcryptjs');

var controller = {

  login(req,response) {
    console.log(req.body);

    userService.checkForExistingUser(req.body.email).then(res=>{
      if(res) {

        let result = bcrypt.compareSync(req.body.password, res.password);

        response.status(200).send({msg:{
          result: result,
          name: res.name,
          email: res.email,
          token: userService.generateJWT(res.email)
        }});

      } else {
        response.send({msg:
          {
            success: false
          }
        });
      }
    })
  },

  register(req,response) {
    console.log(req.body);

    let user = ""

    userService.checkForExistingUser(req.body.email).then(res=>{
      user = res

      if(user) {
        response.status(200).send({msg:
          {
            success: true
          }
        });
      } else {
        let result = userService.registerUser(req.body, uuid, bcrypt)
        result.then(res=>{
          console.log("res "+res);
          response.status(200).send({msg:res});
        },err=>{
          console.log("err "+err);
          response.send({msg:err});
        })
      }
    })
  },

  userProfile(req,response) {
    var token = req.headers.authorization;
    var email = userService.decodeJWT(token)

    userService.checkForExistingUser(email).then(res=>{

      if(res) {
        response.status(200).send({msg:{
          name: res.name,
          email: res.email
        }});
      } else {
        response.send({msg:
          {
            success: false
          }
        });
      }
    })
  },

  updateUserProfile(req, response) {
    var token = req.headers.authorization;
    var email = userService.decodeJWT(token)

    userService.checkForExistingUser(email).then(res=>{

      if(res) {
        userService.updateProfile(email, req.body).then(res1=>{
          response.send({success: true })
        })
      } else {
        response.send({
          success: false
        });
      }
    })
  }

}

module.exports = controller
