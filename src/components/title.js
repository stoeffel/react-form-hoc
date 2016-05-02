import classnames from 'classnames'
import { h } from '../helpers/h'

const {h1} = h
const style = {
  color: 'red'
}

export default ({text, loading = false}) => (
h1({
  style,
  className: classnames({
    loading,
    title: true
  })
}, text)
)
