Making an api call
==================

If you need to fetch data from a backend service, you should add a api thunk in the api folder ([example](https://github.com/stoeffel/react-redux-bp/blob/master/src/api/fetchFakeData.js)).

The thunk should return a redux-saga effect. In most cases this is either `call` or `cps`.
You should use `call` for functions which return a promise and `cps` for callback-style functions.

```js
import fetch from 'isomorphic-fetch'
import { call } from 'redux-saga/effects'

export default ({id}) => call(fetch, `//user/${id}/posts`)
```

This api function should be called in a saga ([example](https://github.com/stoeffel/react-redux-bp/blob/master/src/sagas/fetchFake.js#L16))).

```js
export function * mySaga ({payload}) {
  try {
    yield put(fetching(payload))

    const response = yield myApi(payload)
    if (response.status !== 200) throw new Error('api call failed')

    const result = yield call([response, response.json])

    yield put(fetched(result))
  } catch (e) {
    yield put(fetched(e))
  }
}
```
