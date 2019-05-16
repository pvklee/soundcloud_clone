import {RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG} from '../actions/song_actions'
import merge from 'lodash/merge'

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SONGS:
      if (!action.songs) return state;
      return action.songs; 
    case RECEIVE_SONG:
      return merge({}, state, {[action.song.id]: action.song})
    case REMOVE_SONG:
      const newState = Object.assign({}, state);
      delete newState[action.songId];
      return newState;
    default:
      return state;
  }
}

export default songsReducer;