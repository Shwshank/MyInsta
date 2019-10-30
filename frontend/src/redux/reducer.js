import _ from 'lodash';
import { combineReducers } from 'redux';

let allUserArray=[
  { name:"Sha1", desc:"Desc1", time:"", id:"123" },
  { name:"Sha2", desc:"Desc2", time:"", id:"124" },
  { name:"Sha3", desc:"Desc3", time:"", id:"125" }
]

const getAllUsers = (state=[], action) => {

  switch(action.type) {

    case 'GET_ALL_USERS': {
      state = _.orderBy(allUserArray, 'id')
      return [...state]
    }

    case 'UPDATE_USER': {
      let index = _.findIndex(state, {id:action.payload.id})
      if( index=== -1 ) {
        state.push(action.payload)
      } else {
        state[index] = action.payload
      }
      allUserArray = state
      return [...state]
    }

    case 'DELETE_USER': {
      console.log(action.payload);
      let index = _.findIndex(state, {id:action.payload})
      console.log(index);
      state.splice(index, 1)
      allUserArray = state
      return[...state]
    }

    default: {
      return [...state]
    }
  }
}

const getUser = (state={}, action) =>{

  switch (action.type) {
    case 'GET_USER_INFO': {

      let index = _.findIndex(allUserArray, {id:action.payload.id})
      if(index === -1) {
        state = {
          id:action.payload.id,
          name:"",
          desc:"",
          time:""
        }
      } else {
        console.log(allUserArray[index]);
        state = allUserArray[index]
      }
      return state
    }

    default: {
      return state
    }
  }
}

export default combineReducers({
  getAllUsersReducer: getAllUsers,
  getUserReducer: getUser
})
