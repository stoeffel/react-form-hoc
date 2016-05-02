import test from 'ava'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { createElement } from 'react'
import { fake } from '../../src/actions'

import About from '../../src/containers/about'

const mockStore = configureStore()

test('is fetching', t => {
  const store = mockStore()
  const wrapper = mount(createElement(About, {
    store,
    text: 'test',
    fake: {
      isFetching: true
    }
  }))

  t.is(wrapper.find('h1').text(), 'ABOUT: loading...')
  t.deepEqual(store.getActions(), [
    fake.fetch()
  ])
})

test('fetched', t => {
  const store = mockStore()
  const wrapper = mount(createElement(About, {
    store,
    text: 'test',
    fake: {
      isFetching: false,
      data: 'Hello'
    }
  }))

  t.is(wrapper.find('h1').text(), 'ABOUT: Hello')
})
