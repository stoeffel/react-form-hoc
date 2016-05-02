import { curryN } from 'ramda'
import { bindActionCreators } from 'redux'

const bind = curryN(2, bindActionCreators)

export default function (creators) {
  return bind(creators)
}
