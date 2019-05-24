import {SET_CURRENT_SONG_TIME} from '../actions/current_song_actions'

import merge from 'lodash/merge'

const initialState = {
  currentSongTime: 0
}

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case SET_CURRENT_SONG_TIME:
      return merge({}, state, {currentSongTime: action.time})
    default:
      return state;
  }
}