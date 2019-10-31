import {
  login,
  getAllImages,
  getFavImages,
  favImage,
  unfavImage
} from "../services/APIendPoint";
import _ from 'lodash';

export const loginAction = (email="", password="") => async dispatch =>{

  login(email, password).then(res=>{
    if(res.success) {
      console.log(res);
      dispatch({
        type: 'LOGIN',
        payload: res
      })
    } else {
      alert("Invalid login!")
    }
  })
}

export const logoutAction = () => {
  return({
    type:'LOGOUT'
  })
}

export const getAllImagesAction = (email="", password="") => async dispatch =>{

  getAllImages().then(res=>{
    if(res.success) {
      dispatch({
        type: 'GET_ALL_IMAGES',
        payload: res.imgArray
      })
    } else {
      alert("Unable to resolve!")
    }
  })
}

export const getFavImagesAction = () => async dispatch =>{

  getFavImages().then(res=>{

    if(res.success) {
      dispatch({
        type: 'GET_FAV_IMAGES',
        payload: res.imgArray
      })
    } else {
      alert("Unable to resolve!")
    }
  })
}

export const favImageAction = (image, user_id) => async dispatch =>{

  favImage(image._id, user_id).then(res=>{
    image.favUserId.push(user_id)
    if(res.success) {
      dispatch({
        type: 'FAV_IMAGE',
        payload: image
      })
    } else {
      alert("Unable to resolve!")
    }
  })
}

export const unfavImageAction = (image, user_id) => async dispatch =>{

  unfavImage(image._id, user_id).then(res=>{

    let index = image.favUserId.indexOf( user_id)
    image.favUserId.splice(index, 1)
    console.log(image);
    if(res.success) {
      dispatch({
        type: 'UNFAV_IMAGE',
        payload: image
      })
    } else {
      alert("Unable to resolve!")
    }
  })
}
