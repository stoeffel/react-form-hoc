import test from 'ava'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { createElement } from 'react'
import { push } from 'react-router-redux'

import App from '../../src/containers/app'

const mockStore = configureStore()

test('app', t => {
  const store = mockStore()
  const wrapper = mount(createElement(App, {
    store,
    text: 'test'
  }))

  t.truthy(wrapper.find('.app'))
  t.truthy(wrapper.find('button'))
  wrapper.find('button').simulate('click')
  t.deepEqual(store.getActions(), [
    push('/about')
  ])
})
