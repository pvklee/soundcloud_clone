import {OPEN_SESSION_FORM_MODAL, CLOSE_SESSION_FORM_MODAL, SET_CURRENT_SONG_TIME} from '../actions/ui_actions'
import {RECEIVE_SONGS} from '../actions/song_actions'
import merge from 'lodash/merge'

const initialState = {
  modalState: 'NONE',
  genres: '',
  filteredSongIds: [],
  currentSongTime: 0
}

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case OPEN_SESSION_FORM_MODAL:
      return merge({}, state, {modalState: 'SESSION_FORM'})
    case CLOSE_SESSION_FORM_MODAL:
      return merge({}, state, {modalState: 'NONE'})
    case RECEIVE_SONGS:
      return merge({}, state, {filteredSongIds: action.filteredSongIds})
    case SET_CURRENT_SONG_TIME:
      return merge({}, state, {currentSongTime: action.time})
    default:
      return state;
  }
}