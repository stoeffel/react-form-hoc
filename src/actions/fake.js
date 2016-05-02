import { createAction } from 'redux-actions'

import { FAKE } from '../constants'

export const fetch = createAction(FAKE.FETCH)
export const fetching = createAction(FAKE.FETCHING)
export const fetched = createAction(FAKE.FETCHED)
