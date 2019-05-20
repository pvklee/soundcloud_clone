import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG, RECEIVE_FAVORITE, REMOVE_FAVORITE, RECEIVE_SONG_SEARCH_IDS} from '../actions/song_actions'
import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions'
import merge from 'lodash/merge'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user}); 
    case RECEIVE_SONGS:
      return merge({}, state, action.artists)
    case RECEIVE_SONG:
      return merge({}, state, {[action.artist.id]: action.artist}); 
    case REMOVE_SONG:
      newState = Object.assign(state);
      newState[action.artistId].createdSongIds = newState[action.artistId].createdSongIds.filter(id => id !== action.songId);
      return newState;
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_FAVORITE:
      newState = Object.assign({}, state);
      newState[action.userId].favoriteSongIds.push(action.songId);
      return newState;
    case REMOVE_FAVORITE:
      newState = Object.assign(state);
      newState[action.userId].favoriteSongIds = newState[action.userId].favoriteSongIds.filter(id => id !== action.songId);
      return newState;
    case RECEIVE_SONG_SEARCH_IDS:
      return merge({}, state, action.artists); 
    default:
      return state;
  }
}

export default usersReducer;