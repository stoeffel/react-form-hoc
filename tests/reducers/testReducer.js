import { curry } from 'ramda'

// testReducer :: AvaAssert -> Reducer -> ({} -> {} -> {}) -> Boolean
export default function (t, reducer) {
  return curry((from, to, action) => {
    return t.deepEqual(
      reducer(from, action),
      to
    )
  })
}
