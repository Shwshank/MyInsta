import {
  login,
  getAllImages,
  getFavImages
} from "../services/APIendPoint";

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
