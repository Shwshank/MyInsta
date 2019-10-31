import _ from 'lodash';
import { combineReducers } from 'redux';

const userLogin = (state={}, action) =>{

  switch(action.type) {

    case 'LOGIN' : {
      state = action.payload
      return state
    }

    case 'LOGOUT' : {
      window.localStorage.clear();
      state = {success:false}
      return state
    }

    default: {
      return state
    }
  }
}

const allImages = (state=[], action) => {

  switch(action.type) {
    case 'GET_ALL_IMAGES' : {
      state = [ ...action.payload]
      state = _.uniqBy(state, '_id')
      return [...state]
    }

    case 'FAV_IMAGE' : {
      let index = _.findIndex(state, {_id:action.payload._id})
      state[index] = action.payload
      return [...state]
    }

    default: {
      return state
    }
  }
}

const favImages = (state=[], action) => {
  switch(action.type) {

    case 'GET_FAV_IMAGES' : {
      state = [...action.payload]
      state = _.uniqBy(state, '_id')
      return [...state]
    }

    case 'UNFAV_IMAGE' : {
      let index = _.findIndex(state, {_id:action.payload._id})
      state[index] = action.payload
      console.log(state);
      return [...state]
    }

    default: {
      return state
    }
  }
}

export default combineReducers({
  loginReducer: userLogin,
  allImageReducer: allImages,
  favImageReducer: favImages,
})
