import {RECEIVE_COMMENT, RECEIVE_COMMENTS} from '../actions/comment_actions'
import merge from 'lodash/merge'

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment})
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments)
    default:
      return state;
  }
}

export default commentsReducer;