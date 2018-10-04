import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import testPage from './test'

export default combineReducers({
  routing: routerReducer,
  testPage,
})
