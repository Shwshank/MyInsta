var db = require('../db/db');
var image = require('../model/imageModel');
var user = require('../model/userModel');
const config = require('../config/config')

Image = {

  getAllImages: async function() {
    try{

      let imgList
      await image.find({}).exec().then(res=>{
        if(res) {
          imgList = res
        }
      }, err=>{
        console.log(err);
      })
      return imgList
    } catch(err) {
      console.log(err);
    }
  },

  postImage: async function(data) {
    try{

      await new image({
        url: data.url,
        name: data.name
      }).save().then(res=>{
        resp = res
      }), err=>{
        resp = err
      }
      return resp
    } catch(err) {
      console.log(err);
      return err+""
    }
  },

  favImageIdUserId : async function (data) {
    try{

      let temp = false
      await image.findOneAndUpdate(
        { _id: data.image_id },
        { $addToSet: {favUserId: data.user_id }}
      ).exec().then(res=>{

        if(res) {
          temp = true
          user.findOneAndUpdate(
            { _id: data.user_id },
            { $addToSet: {favImageId: data.image_id }}
          ).exec().then(res2=>{
            temp = true
          })}

          return temp
      }, err =>{
        console.log(err);
      })
      return temp
    } catch(err) {
      console.log(err);
      return err+""
    }
  },

  unfavImageIdUserId : async function (data) {
    try{

      let temp = false
      await image.findOneAndUpdate(
        { _id: data.image_id },
        { $pull: {favUserId: data.user_id }}
      ).exec().then(res=>{

        if(res) {
          temp = true
          user.findOneAndUpdate(
            { _id: data.user_id },
            { $pull: {favImageId: data.image_id }}
          ).exec().then(res2=>{
            temp = true
          })}

          return temp
      }, err =>{
        console.log(err);
      })
      return temp
    } catch(err) {
      console.log(err);
      return err+""
    }
  },

  getAnImage: async function(data) {
    try{
      let img
      await image.findOne({_id: data}).exec().then(res=>{
        img = res
      }), err=>{
        img = err
      }
      return img

    } catch(err) {
      console.log(err);
      return err+""
    }
  }

}

module.exports = Image;
