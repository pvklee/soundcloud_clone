import {OPEN_SESSION_FORM_MODAL, CLOSE_SESSION_FORM_MODAL, SET_CURRENT_SONG_TIME} from '../actions/ui_actions'
import {RECEIVE_SONGS} from '../actions/song_actions'
import {RECEIVE_SEARCH_SUGGESTIONS, RECEIVE_SEARCH_RESULTS} from '../actions/search_actions'
import merge from 'lodash/merge'

const initialState = {
  modalState: 'NONE',
  genres: '',
  filteredSongIds: [],
  searchResultIds: [],
  searchSuggestionIds: [],
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
    case RECEIVE_SEARCH_SUGGESTIONS:
      newState = merge({}, state, {searchSuggestionIds: []})
      newState.searchSuggestionIds = action.searchSuggestionIds;
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      newState = merge({}, state, {searchResultIds: []})
      newState.searchResultIds = action.searchResultIds;
      return newState;
    default:
      return state;
  }
}