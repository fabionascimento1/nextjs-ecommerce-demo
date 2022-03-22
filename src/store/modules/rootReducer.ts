import { combineReducers } from 'redux'

import theme from './theme/reducer'
import menu from './hamburguerMenu/reducer'
import { cartReducer } from './cart/reducer'
//import products from './products/reducer'

const rootReducer = combineReducers({
  theme,
  menu,
  cart: cartReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
