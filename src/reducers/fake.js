import { handleActions } from 'redux-actions'
import { ifElse, assoc, compose } from 'ramda'

import { FAKE } from '../constants'

const {FETCHING, FETCHED} = FAKE
const init = {data: '', isFetching: false}

const fetching = assoc('isFetching', true)
const fetched = (state, {payload, error}) => compose(
  assoc('isFetching', false),
  ifElse(
    () => error,
      assoc('error', payload),
      assoc('data', payload.data)
    )
)(state)

export default handleActions({
  [FETCHING]: fetching,
  [FETCHED]: fetched
}, init)
