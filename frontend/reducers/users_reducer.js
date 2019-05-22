import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG, RECEIVE_FAVORITE, REMOVE_FAVORITE} from '../actions/song_actions'
import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions'
import {RECEIVE_SEARCH_SUGGESTIONS, RECEIVE_SEARCH_RESULTS} from '../actions/search_actions'
import merge from 'lodash/merge'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let newUser;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user}); 
    case RECEIVE_SONGS:
      return merge({}, state, action.artists)
    case RECEIVE_SONG:
      return merge({}, state, {[action.artist.id]: action.artist}); 
    case REMOVE_SONG:
      newState = merge({}, state);
      newState[action.artistId].createdSongIds = newState[action.artistId].createdSongIds.filter(id => id !== action.songId);
      return newState;
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_FAVORITE:
      newState = merge({}, state);
      newState[action.userId].favoriteSongIds.push(action.songId);
      return newState;
    case REMOVE_FAVORITE:
      newState = merge({}, state);
      newState[action.userId].favoriteSongIds = newState[action.userId].favoriteSongIds.filter(id => id !== action.songId);
      return newState;
    case RECEIVE_SEARCH_SUGGESTIONS:
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.users);  
    default:
      return state;
  }
}

export default usersReducer;