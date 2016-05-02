import test from 'ava'
import { APP_NAME, appNamespace, constants } from '../../src/constants/createConstants'

test(t => {
  t.is(APP_NAME, 'my-app')
  t.deepEqual(appNamespace({foo: 'foo'}), {foo: 'my-app/foo'})
  t.deepEqual(constants('moo', ['foo']), {FOO: 'my-app/moo/FOO'})
})
