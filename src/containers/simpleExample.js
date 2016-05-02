import React from 'react'
import { connect } from 'react-redux'
import bindActionCreators from '../helpers/bindActionCreators'
import { h, hh } from '../helpers/h'
import SimpleForm from '../components/simpleForm'
import formHoc from 'react-form-hoc'

const { div, pre } = h

const SimpleExample = (props) =>
div(null,
  SimpleForm(props),
  pre(null,
  `
const Input =({ label, error, touched, ...props }) =>
  <TextField {...props} {/* TextField f.e. from Material-ui */}
    hintText={label}
    errorText={ touched && error} />

const SimpleForm = ({ fields }) =>
  <form>
    <Input label='First name' {...fields.firstName} />
    <Input label='Last name' {...fields.lastName} />
  </Form>

const fields = [
  'firstName',
  'lastName'
]

const validate = (key, value) => {
  switch (key) {
  case 'firstName':
  case 'lastName':
    return value && value.length ? null: 'required!'
  }
}

export default formHoc({
  fields, validate
})(SimpleForm)
  `
  )
)

const fields = [
  'firstName',
  'lastName'
]

const validate = (key, value) => {
  switch (key) {
  case 'firstName':
  case 'lastName':
    return value && value.length ? null: 'required!'
  }
}

export default formHoc({
  fields, validate
})(SimpleExample)
