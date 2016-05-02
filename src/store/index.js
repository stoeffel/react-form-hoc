import { compose, identity } from 'ramda'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import middlewares from './middlewares'
import persist, { persistedReducers } from './persist'
import sagas from '../sagas'
import reducers from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const createFinalStore = compose(
  persist(),
  applyMiddleware(...middlewares(), sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : identity
)(createStore)

const store = createFinalStore(
  persistedReducers(reducers)
)

sagaMiddleware.run(sagas)

export default store
