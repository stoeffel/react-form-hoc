import { compose, identity, ifElse } from 'ramda'
import persistState, { mergePersistedState } from 'redux-localstorage'
import adapter from 'redux-localstorage/lib/adapters/localStorage'
import filter from 'redux-localstorage-filter'
import delay from 'redux-localstorage-debounce'

import persistPaths from './persistPaths'
import { APP_NAME } from '../constants'

export default function () {
  if (__TESTING__) return identity

  const storage = compose(
    delay(100),
    filter(persistPaths)
  )(adapter(window.localStorage))

  return persistState(storage, APP_NAME)
}

export const persistedReducers = compose(
  ifElse(
    () => __TESTING__,
    identity,
    (...args) => mergePersistedState()(...args)
  )
)
