import test from 'ava'

import { APP } from '../../src/constants'

test(t => {
  t.deepEqual(APP, {
    START_APP: 'my-app/status/START_APP',
    STARTING_APP: 'my-app/status/STARTING_APP',
    APP_STARTED: 'my-app/status/APP_STARTED'
  })
})
