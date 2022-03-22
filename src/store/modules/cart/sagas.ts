import { call, select, put } from 'redux-saga/effects'

import api from 'services/api'

import { toast } from 'react-toastify'

import { addToCartSuccess, updateAmountSuccess } from './actions'
import { setProductStatus } from '../products/actions'
import { formatPrice } from 'utils/format'

type ProductID = {
  id: number
  amount: number
  type: string
}

export function* addToCart({ id }: ProductID) {
  yield put(setProductStatus(id, true))

  const productExists = yield select((state) =>
    state.cart.data.find((p) => p.id === id)
  )

  const stock = yield call(api.get, `stock/${id}`)

  const stockAmount = stock.data.amount
  const currentAmount = productExists ? productExists.amount : 0

  const amount = currentAmount + 1

  try {
    if (amount > stockAmount) {
      toast.error('Não há quantidade solicitada desse produto em estoque')
      return
    }

    if (productExists) {
      yield put(updateAmountSuccess(id, amount))
    } else {
      const response = yield call(api.get, `products/${id}`)

      const data = {
        ...response.data,
        amount: 1,
        priceFormatted: formatPrice(response.data.price)
      }

      yield put(addToCartSuccess(data))
      // history.push('/cart');
    }
  } finally {
    yield put(setProductStatus(id, false))
  }
}

export function* updateAmount({ id, amount }: ProductID) {
  if (amount <= 0) return

  const stock = yield call(api.get, `stock/${id}`)
  const stockAmount = stock.data.amount

  if (amount > stockAmount) {
    toast.error('Não há quantidade solicitada desse produto em estoque')
    return
  }

  yield put(updateAmountSuccess(id, amount))
}
