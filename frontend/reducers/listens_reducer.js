import {RECEIVE_LISTEN, RECEIVE_LISTENS} from '../actions/listen_actions'
import merge from 'lodash/merge'

const listensReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_LISTEN:
      return merge({}, state, {[action.listen.id]: action.listen})
    case RECEIVE_LISTENS:
      return merge({}, state, action.listens)
    default:
      return state;
  }
}

export default listensReducer;