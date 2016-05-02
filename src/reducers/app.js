import { handleActions } from 'redux-actions'
import { assoc } from 'ramda'

import { APP } from '../constants'

const init = {started: false}
const assocStarted = assoc('started')
const appStarted = (state, {error}) => assocStarted(!error, state)

export default handleActions({
  [APP.APP_STARTED]: appStarted
}, init)
