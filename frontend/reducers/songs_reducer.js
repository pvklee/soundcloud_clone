import {RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG, RECEIVE_FAVORITE, REMOVE_FAVORITE} from '../actions/song_actions'
import {RECEIVE_COMMENT} from '../actions/comment_actions'
import merge from 'lodash/merge'

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_SONGS:
      if (!action.songs) return state;
      return action.songs; 
    case RECEIVE_SONG:
      return merge({}, state, {[action.song.id]: action.song})
    case REMOVE_SONG:
      newState = Object.assign({}, state);
      delete newState[action.songId];
      return newState;
    case RECEIVE_FAVORITE:
      newState = Object.assign({}, state);
      newState[action.songId].favoritedUserIds.push(action.userId);
      return newState;
    case REMOVE_FAVORITE:
      newState = Object.assign(state);
      newState[action.songId].favoritedUserIds = newState[action.songId].favoritedUserIds.filter(id => id !== action.userId);
      return newState;
    case RECEIVE_COMMENT:
      newState = Object.assign(state);
      newState[action.songId].commentIds.push(action.comment.id);
    default:
      return state;
  }
}

export default songsReducer;