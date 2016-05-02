import test from 'ava'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { createElement } from 'react'

import Home from '../../src/containers/home'

const mockStore = configureStore()

test('home', t => {
  const store = mockStore()
  const wrapper = mount(createElement(Home, {
    store
  }))

  t.is(wrapper.find('h1').text(), 'Home')
})
