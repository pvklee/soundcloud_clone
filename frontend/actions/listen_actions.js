import * as APIUtil from '../util/listen_api_util'

export const RECEIVE_LISTEN = "RECEIVE_LISTEN"
export const RECEIVE_LISTENS = "RECEIVE_LISTENS"

const receiveListen = listen => ({
  type: RECEIVE_LISTEN,
  listen
})

export const receiveListens = ({listens}) => ({
  type: RECEIVE_LISTENS,
  listens
})

//async

export const createListen = listen => dispatch => (
  APIUtil.createListen(listen)
    .then(listen=>dispatch(receiveListen(listen)))
)
