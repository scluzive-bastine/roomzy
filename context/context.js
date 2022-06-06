import { createContext, useContext, useReducer } from 'react'
import { contextReducer, INITIAL_STATE } from './contextReducer'

export const ProviderContext = createContext()

const AppActions = () => {
  const [state, dispatch] = useReducer(contextReducer, INITIAL_STATE)

  const toggleCheckout = () => {
    dispatch({ type: 'TOGGLE_CHECKOUT' })
  }

  const toggleSearch = () => {
    dispatch({ type: 'TOGGLE_SEARCH' })
  }

  const setHotel = (hotel) => {
    dispatch({ type: 'SET_HOTEL', payload: hotel })
  }

  return {
    state,
    toggleCheckout,
    toggleSearch,
    setHotel,
  }
}

const Provider = ({ children }) => {
  const { state, ...restProps } = AppActions()

  const value = {
    isCheckoutOpen: state.isCheckoutOpen,
    isSearchOpen: state.isSearchOpen,
    hotel: state.hotel,
    ...restProps,
  }

  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  )
}

const useProviderContext = () => {
  const context = useContext(ProviderContext)
  return context
}

export { Provider, useProviderContext }
