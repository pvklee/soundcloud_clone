import {RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG, RECEIVE_FAVORITE, REMOVE_FAVORITE} from '../actions/song_actions'
import {RECEIVE_COMMENT} from '../actions/comment_actions'
import {RECEIVE_SEARCH_SUGGESTIONS, RECEIVE_SEARCH_RESULTS} from '../actions/search_actions'
import merge from 'lodash/merge'

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_SONGS:
      if (!action.songs) return state;
      return merge({}, state, action.songs);
    case RECEIVE_SONG:
      return merge({}, state, {[action.song.id]: action.song})
    case REMOVE_SONG:
      newState = merge({},state);
      delete newState[action.songId];
      return newState;
    case RECEIVE_FAVORITE:
      newState = merge({},state);
      newState[action.songId].favoritedUserIds.push(action.userId);
      newState[action.songId].num_favorites += 1;
      return newState;
    case REMOVE_FAVORITE:
      newState = merge({},state);
      newState[action.songId].favoritedUserIds = newState[action.songId].favoritedUserIds.filter(id => id !== action.userId);
      newState[action.songId].num_favorites -= 1;
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({},state);
      newState[action.songId].commentIds.push(action.comment.id);
      return newState;
    case RECEIVE_SEARCH_SUGGESTIONS:
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.songs)
    default:
      return state;
  }
}

export default songsReducer;