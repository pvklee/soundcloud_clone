import {combineReducers} from 'redux'
import sessionErrorsReducer from './session_errors_reducer'
import songFormErrorsReducer from './song_form_errors_reducer'
export default combineReducers({
  session: sessionErrorsReducer,
  songForm: songFormErrorsReducer
})