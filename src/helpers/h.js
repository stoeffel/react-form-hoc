import { isEmpty } from 'ramda'
import { DOM, createElement } from 'react'

export const hh =
(Component) => (props, childOrArray, ...rest) => {
  if (isEmpty(rest)) {
    return createElement(Component, props, childOrArray, ...rest)
  } else {
    return createElement(Component, props, childOrArray)
  }
}

export const h = DOM
