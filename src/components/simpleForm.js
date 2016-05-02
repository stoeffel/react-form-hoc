import TextField from './textField'
import { h, hh } from '../helpers/h'

const {form} = h
const input = hh(TextField)

export default ({ fields }) => (
  form(null,
    input({ label: 'First name', ...fields.firstName}),
    input({ label: 'Last name', ...fields.lastName})
  )
)
