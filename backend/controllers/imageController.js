var imageService = require('../services/imageServices')

var imageController = {

  getAllImages(req, response) {

    imageService.getAllImages().then(res=>{
      console.log(res);
      if(res) {
        response.status(200).send({
          success: true,
          imgArray:res
        })
      } else {
        response.send({
          success: false
        });
      }
    })
  },

  postImage(req, response) {

    let result = imageService.postImage(req.body)
    result.then(res=>{
      console.log(res);
      response.status(200).send({
        success: true,
        msg:res
      });
      },err=>{
        console.log("err "+err);
        response.send({msg:err});
      })
  },

  favImageIdUserId(req, response) {

    let result = imageService.favImageIdUserId(req.body)
    result.then(res=>{
      console.log(res);
      response.status(200).send({
        success: true,
        msg:res
      });
      },err=>{
        console.log("err "+err);
        response.send({msg:err});
      })
  },

  unfavImageIdUserId(req, response) {

    let result = imageService.unfavImageIdUserId(req.body)
    result.then(res=>{
      console.log(res);
      response.status(200).send({
        success: true,
        msg:res
      });
      },err=>{
        console.log("err "+err);
        response.send({msg:err});
      })
  }

}

module.exports = imageController
