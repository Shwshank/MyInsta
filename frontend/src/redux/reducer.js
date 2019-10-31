import _ from 'lodash';
import { combineReducers } from 'redux';

const userLogin = (state={}, action) =>{

  switch(action.type) {

    case 'LOGIN' : {
      state = action.payload
      return state
    }

    case 'LOGOUT' : {
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
      state = [...state, ...action.payload]
      state = _.uniqBy(state, '_id')
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
      state = [...state, ...action.payload]
      state = _.uniqBy(state, '_id')
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
