import { createAction } from 'redux-actions'

import { APP } from '../constants'

export const startApp = createAction(APP.START_APP)
export const startingApp = createAction(APP.STARTING_APP)
export const appStarted = createAction(APP.APP_STARTED)
