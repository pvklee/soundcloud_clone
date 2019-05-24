import {OPEN_LOGIN_FORM_MODAL, OPEN_SIGNUP_FORM_MODAL, CLOSE_MODAL} from '../actions/modal_actions'

import merge from 'lodash/merge'

const initialState = {
  modalState: 'NONE',
}

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case OPEN_LOGIN_FORM_MODAL:
      return merge({}, state, {modalState: 'LOGIN_FORM'})
    case OPEN_SIGNUP_FORM_MODAL:
      return merge({}, state, {modalState: 'SIGNUP_FORM'})
    case CLOSE_MODAL:
      return merge({}, state, {modalState: 'NONE'})
    default:
      return state;
  }
}