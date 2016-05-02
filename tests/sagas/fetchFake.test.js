import test from 'ava'
import fetch from 'isomorphic-fetch'
import fromGenerator from 'redux-saga-test'
import watchFetchFake, { onFetch } from '../../src/sagas/fetchFake'
import { delay } from '../../src/sagas/helpers'
import { fake } from '../../src/actions'
import { FAKE } from '../../src/constants'

const {FETCH} = FAKE
const {fetching, fetched} = fake

const payload = 'foo'

test(t => {
  const expect = fromGenerator(t, onFetch({ payload }))

  expect.next().put(fetching(payload))
  expect.next().call(delay, 2000)
  expect.next().call(fetch, './fixtures/fakeData.json')
  const result = 'test'
  const response = {
    json () {
      return result
    }
  }
  expect.next(response).call([response, response.json])
  expect.next(result).put(fetched(result))
})

test(t => {
  const error = new Error('foo')
  const expect = fromGenerator(t, onFetch({ payload }))

  expect.next().put(fetching(payload))
  expect.throwNext(error).put(fetched(error))
})

test(t => {
  const expect = fromGenerator(t, watchFetchFake())

  expect.takeLatest(FETCH, onFetch)
})
