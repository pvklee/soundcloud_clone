import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

const nullSession = {
  currentUserId: null
}

export default (state = nullSession, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      debugger;
      return Object.assign({}, {currentUserId: action.user.id})
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default:
      return state;
  }
}