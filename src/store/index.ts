import { createStore, applyMiddleware, compose, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { CartState } from './modules/cart/types'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export interface ApplicationState {
  cart: CartState
}

const sagaMonitor = process.env.NODE_ENV === 'development' ? null : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)

const store: Store<ApplicationState> = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
