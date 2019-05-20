import {OPEN_SESSION_FORM_MODAL, CLOSE_SESSION_FORM_MODAL, SET_CURRENT_SONG_TIME} from '../actions/ui_actions'
import {RECEIVE_SONGS, RECEIVE_SONG_SEARCH_IDS} from '../actions/song_actions'
import merge from 'lodash/merge'

const initialState = {
  modalState: 'NONE',
  genres: '',
  filteredSongIds: [],
  userSearchIds: [],
  songSearchIds: [],
  currentSongTime: 0
}

export default (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case OPEN_SESSION_FORM_MODAL:
      return merge({}, state, {modalState: 'SESSION_FORM'})
    case CLOSE_SESSION_FORM_MODAL:
      return merge({}, state, {modalState: 'NONE'})
    case RECEIVE_SONGS:
      return merge({}, state, {filteredSongIds: action.filteredSongIds})
    case SET_CURRENT_SONG_TIME:
      return merge({}, state, {currentSongTime: action.time})
    case RECEIVE_SONG_SEARCH_IDS:
      newState = merge({}, state, {songSearchIds: []})
      newState.songSearchIds = action.songSearchIds;
      return newState;
    default:
      return state;
  }
}