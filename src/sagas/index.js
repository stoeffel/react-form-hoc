import { map } from 'ramda'
import { fork } from 'redux-saga/effects'

import watchStartApp from './startApp'
import watchFetch from './fetchFake'

const forkSagas = map(fork)

export default function * rootSaga () {
  yield forkSagas([
    watchStartApp,
    watchFetch
  ])
}
