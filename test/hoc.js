import React from 'react'
import { mount } from 'enzyme'
import bro from 'jsdom-test-browser'
import formHOC from '../module'
import expect from 'expect'
import sinon from 'sinon'

function write (input, str) {
  return input.props().onChange({
    target: {
      value: str
    }
  })
}

describe('React-Form-HOC', () => {
  before(bro.newBrowser)

  const MyForm = ({ fields }) => (
    <form>
      <input {...fields.firstName} />
      <input {...fields.lastName} />
    </form>
  )

  const initialValues = {
    firstName: 'Christoph',
    lastName: 'Hermann'
  }
  const fields = [
    'firstName',
    'lastName'
  ]

  it('should render the passed component', () => {
    const Formed = formHOC()(MyForm)
    const wrapper = mount(<Formed />)
    expect(wrapper.find('input').length).toBe(2)
  })

  it('should pass the initialValues', () => {
    const Formed = formHOC({
      fields
    })(MyForm)
    const wrapper = mount(<Formed initialValues={initialValues} />)
    const inputs = wrapper.find('input')
    expect(inputs.at(0).props().name).toEqual('firstName')
    expect(inputs.at(0).props().value).toEqual('Christoph')
  })

  it('should update the value of a field', () => {
    const Formed = formHOC({
      fields
    })(MyForm)
    const wrapper = mount(<Formed initialValues={initialValues} />)
    const inputs = wrapper.find('input')
    const input = inputs.at(0)
    write(input, 'asd')
    expect(input.props().value).toEqual('asd')
  })

  it('should set touched onBlur', () => {
    const Formed = formHOC({
      fields
    })(MyForm)
    const wrapper = mount(<Formed initialValues={initialValues} />)
    const inputs = wrapper.find('input')
    const input = inputs.at(0)
    input.props().onBlur()
    expect(input.props().touched).toBe(true)
    expect(inputs.at(1).props().touched).toBe(false)
  })

  it('should validate the fields', () => {
    const Formed = formHOC({
      fields,
      validate: (key, value) => {
        switch (key) {
          case 'firstName':
            return value && value.length ? null : 'required'
          default: null
        }
      }
    })(MyForm)
    const wrapper = mount(<Formed initialValues={initialValues} />)
    const inputs = wrapper.find('input')
    const input = inputs.at(0)
    expect(input.props().error).toBe(null)
    write(input, '')
    input.props().onBlur()
    expect(input.props().error).toBe('required')
    write(input, 'foo')
    expect(input.props().error).toBe(null)
  })

  it('should call onChange if is valid', () => {
    const spy = sinon.spy()
    const Formed = formHOC({
      fields,
      validate: (key, value) => {
        switch (key) {
          case 'firstName':
            return value && value.length ? null : 'required'
          default:
            return null
        }
      }
    })(MyForm)
    const wrapper = mount(
      <Formed initialValues={initialValues}
        onChange={spy}
        />
    )
    const inputs = wrapper.find('input')
    const input = inputs.at(0)
    expect(input.props().error).toBe(null)
    write(input, '')
    input.props().onBlur()
    expect(input.props().error).toBe('required')
    expect(spy.getCall(0).args).toEqual([{
      firstName: '',
      lastName: 'Hermann'
    }, false])
    write(input, 'foo')
    expect(input.props().error).toBe(null)
    expect(inputs.at(1).props().error).toBe(null)
    expect(input.props().touched).toBe(true)
    expect(spy.getCall(1).args).toEqual([{
      firstName: 'foo',
      lastName: 'Hermann'
    }, true])
  })
})
