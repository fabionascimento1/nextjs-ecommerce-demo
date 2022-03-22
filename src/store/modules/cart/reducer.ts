import { Reducer } from 'redux'

import { CartState, CartActionTypes } from './types'

const INITIAL_STATE: CartState = {
  data: [],
  error: false,
  loading: false
}

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_REQUEST: {
      return { ...state, loading: true }
    }
    case CartActionTypes.ADD_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        data: [...state.data, action.data]
      }
    }
    case CartActionTypes.UPDATE_AMOUNT_SUCCESS: {
      const productIndex = state.data.findIndex((p) => p.id === action.id)
      const NewArrayProducts = state.data
      NewArrayProducts[productIndex] = {
        amount: action.amount,
        id: action.id,
        image: NewArrayProducts[productIndex].image,
        price: NewArrayProducts[productIndex].price,
        priceFormatted: NewArrayProducts[productIndex].priceFormatted,
        title: NewArrayProducts[productIndex].title
      }
      return {
        error: false,
        loading: false,
        data: [...NewArrayProducts]
      }
    }
    case CartActionTypes.REMOVE: {
      const productIndex = state.data.findIndex((p) => p.id === action.id)
      const NewArrayProducts = state.data
      NewArrayProducts.splice(productIndex, 1)
      return {
        error: false,
        loading: false,
        data: [...NewArrayProducts]
      }
    }

    default: {
      return state
    }
  }
}

export { reducer as cartReducer }
