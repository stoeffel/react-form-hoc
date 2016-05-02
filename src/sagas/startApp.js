import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { elementById, render } from './helpers'
import { startingApp, appStarted } from '../actions/app'
import { APP, HTML } from '../constants'
import Provider from '../provider'

const {START_APP} = APP

export function * onStartApp () {
  try {
    yield put(startingApp())

    const appDiv = yield call(elementById, HTML.ROOT_ELEMENT_ID)
    yield call(render, Provider(), appDiv)
    yield put(appStarted())
  } catch (e) {
    console.error(e)
    yield put(appStarted(e))
  }
}

export default function * watchStartApp () {
  yield * takeEvery(START_APP, onStartApp)
}
