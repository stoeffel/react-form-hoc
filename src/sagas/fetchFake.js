import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { delay } from './helpers'
import { fetchFakeData } from '../api'
import { fake } from '../actions'
import { FAKE } from '../constants'

const {FETCH} = FAKE
const {fetching, fetched} = fake

export function * onFetch ({payload}) {
  try {
    yield put(fetching(payload))
    yield call(delay, 2000)
    const response = yield fetchFakeData(payload)
    const result = yield call([response, response.json])
    yield put(fetched(result))
  } catch (e) {
    yield put(fetched(e))
  }
}

export default function * watchFetch () {
  yield * takeLatest(FETCH, onFetch)
}
