import test from 'ava'
import fromGenerator from 'redux-saga-test'
import { elementById, render } from '../../src/sagas/helpers'
import { HTML } from '../../src/constants'
import { startingApp, appStarted } from '../../src/actions/app'
import { APP } from '../../src/constants'
import watchStartApp, { onStartApp } from '../../src/sagas/startApp'
import Provider from '../../src/provider'

test(t => {
  const expect = fromGenerator(t, onStartApp())

  expect.next().put(startingApp())
  expect.next().call(elementById, HTML.ROOT_ELEMENT_ID)
  const appDiv = '<div>'
  expect.next(appDiv).call(render, Provider(), appDiv)
  expect.next().put(appStarted())
})

test(t => {
  const error = new Error('foo')
  const expect = fromGenerator(t, onStartApp())

  expect.next().put(startingApp())
  expect.throwNext(error).put(appStarted(error))
})

test(t => {
  const expect = fromGenerator(t, watchStartApp())

  expect.takeEvery(APP.START_APP, onStartApp)
})
