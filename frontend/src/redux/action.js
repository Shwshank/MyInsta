
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
