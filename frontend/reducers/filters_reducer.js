import {RECEIVE_SONGS} from '../actions/song_actions'
import {RECEIVE_SEARCH_SUGGESTIONS, RECEIVE_SEARCH_RESULTS} from '../actions/search_actions'

import merge from 'lodash/merge'

const initialState = {
  genres: '',
  filteredSongIds: [],
  searchResultIds: [],
  searchSuggestionIds: [],
}

export default (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_SONGS:
      newState = merge({}, state, {filteredSongIds: []})
      newState.filteredSongIds = action.filteredSongIds;
      return newState;
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