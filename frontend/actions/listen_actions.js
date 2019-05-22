import * as APIUtil from '../util/listen_api_util'

export const RECEIVE_LISTEN = "RECEIVE_LISTEN"

const receiveListen = listen => ({
  type: RECEIVE_LISTEN,
  listen
})

//async

export const createListen = listen => dispatch => (
  APIUtil.createListen(listen)
    .then(listen=>dispatch(receiveListen(listen)))
)
