export const INITIAL_STATE = {
  isCheckoutOpen: false,
  isSearchOpen: false,
}

export const contextReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKOUT':
      return {
        ...state,
        isCheckoutOpen: !state.isCheckoutOpen,
      }
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen,
      }
    default:
      return state
  }
}
