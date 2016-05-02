import test from 'ava'
import { shallow } from 'enzyme'

import { h } from '../../src/helpers/h'
import Title from '../../src/components/title'

const { h1 } = h

test('title component', t => {
  const notLoading = shallow(Title({ text: 'test' }))
  t.truthy(notLoading.contains(
    h1({ style: { color: 'red' }, className: 'title' }, 'test')
  ))

  const loading = shallow(Title({ text: 'test', loading: true }))
  t.truthy(loading.contains(
    h1({ style: { color: 'red' }, className: 'loading title' }, 'test')
  ))
})
