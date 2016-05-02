import { curry } from 'ramda'
import { Component, createElement } from 'react'

const mount = curry((callback, BaseComponent) =>
  class extends Component {
    componentWillMount () {
      callback(this.props)
    }

    render () {
      return createElement(BaseComponent, this.props)
    }
  }
)

export default mount
