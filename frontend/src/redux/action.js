import { login } from "../services/APIendPoint";

export const loginAction = (email="", password="") => async dispatch =>{

  login(email, password).then(res=>{
    if(res) {
      console.log(res);
      dispatch({
        type: 'LOGIN',
        payload: res
      })
    }
  })
}

export const logoutAction = () => {
  return({
    type:'LOGOUT'
  })
}

export const getAllUsers = () => {
  return({
    type:'GET_ALL_USERS'
  })
}

export const getUserInfo = ( id ) => {
  return({
    type:'GET_USER_INFO',
    payload: {id:id}
  })
}

export const addUser = ( user ) =>{
  return({
    type: "UPDATE_USER",
    payload: user
  })
}

export const deleteUser =  (id) =>{
  return ({
    type: "DELETE_USER",
    payload: id
  })
}
