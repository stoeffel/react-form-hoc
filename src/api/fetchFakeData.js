import fetch from 'isomorphic-fetch'
import { call } from 'redux-saga/effects'

export default () => call(fetch, './fixtures/fakeData.json')
