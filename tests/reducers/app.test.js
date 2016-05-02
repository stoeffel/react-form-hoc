import test from 'ava'

import testReducer from './testReducer'
import appReducer from '../../src/reducers/app'
import { appStarted } from '../../src/actions/app'

test('app', t => {
  const assertReducer = testReducer(t, appReducer)
  const init = {
    started: false
  }
  const expected = {
    started: true
  }

  assertReducer(
    init,
    expected,
    appStarted()
  )
})
