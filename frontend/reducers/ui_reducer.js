import {combineReducers} from 'redux'
import modalReducer from './modal_reducer'
import filtersReducer from './filters_reducer'
import currentSongReducer from './current_song_reducer'
import loadingReducer from './loading_reducer'

export default combineReducers({
  modal: modalReducer,
  filters: filtersReducer,
  currentSong: currentSongReducer,
  loading: loadingReducer
})