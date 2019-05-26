import {RECEIVE_SONG_FORM_ERRORS} from '../actions/song_actions'

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SONG_FORM_ERRORS:
      return Object.assign({}, action.err)
    default:
      return state;
  }
}

export default sessionErrorsReducer;