export const selectAllSessionErrors = state => (
  Object.values(state.errors.session)
)
