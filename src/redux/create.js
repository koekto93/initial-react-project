import { createStore as _createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootMiddleware from './middleware'
import reducer from './modules'

export default function createStore() {
  const sagaMiddleware = createSagaMiddleware()

  const store = _createStore(reducer, applyMiddleware(sagaMiddleware, logger))

  sagaMiddleware.run(rootMiddleware())

  return store
}
