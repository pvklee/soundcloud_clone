import {OPEN_SESSION_FORM_MODAL, CLOSE_SESSION_FORM_MODAL} from '../actions/ui_actions'
import {RECEIVE_SONGS} from '../actions/song_actions'
import merge from 'lodash/merge'

const initialState = {
  modalState: 'NONE',
  genres: '',
  filteredSongIds: []
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
    default:
      return state;
  }
}