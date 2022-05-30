export const INITIAL_STATE = {
  isCheckoutOpen: false,
}

export const contextReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKOUT':
      return {
        ...state,
        isCheckoutOpen: !state.isCheckoutOpen,
      }
    default:
      return state
  }
}
