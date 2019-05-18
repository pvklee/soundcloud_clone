export const OPEN_SESSION_FORM_MODAL = "OPEN_SESSION_FORM_MODAL"
export const CLOSE_SESSION_FORM_MODAL = "CLOSE_SESSION_FORM_MODAL"
export const SET_CURRENT_SONG_TIME = "SET_CURRENT_SONG_TIME"

export const openSessionFormModal = () => ({
  type: OPEN_SESSION_FORM_MODAL,
})

export const closeSessionFormModal = () => ({
  type: CLOSE_SESSION_FORM_MODAL,
})

export const setCurrentSongTime = (time) => ({
  type: SET_CURRENT_SONG_TIME,
  time
})