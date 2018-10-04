import { all, fork } from 'redux-saga/effects'

import test from './test'

export default function rootMiddleware() {
  return function*() {
    yield all([fork(test)])
  }
}
