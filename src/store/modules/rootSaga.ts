import { all, takeLatest } from 'redux-saga/effects'

import { CartActionTypes } from './cart/types'
import { addToCart, updateAmount } from './cart/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(CartActionTypes.ADD_REQUEST, addToCart),
    takeLatest(CartActionTypes.UPDATE_AMOUNT_REQUEST, updateAmount)
  ])
}
