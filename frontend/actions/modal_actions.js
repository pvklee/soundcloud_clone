export const OPEN_LOGIN_FORM_MODAL = "OPEN_LOGIN_FORM_MODAL"
export const OPEN_SIGNUP_FORM_MODAL = "OPEN_SIGNUP_FORM_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

export const openLoginFormModal = () => ({
  type: OPEN_LOGIN_FORM_MODAL,
})

export const openSignupFormModal = () => ({
  type: OPEN_SIGNUP_FORM_MODAL,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})
