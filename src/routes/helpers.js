import { isEmpty, curryN } from 'ramda'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { hh } from '../helpers/h'

export const syncHistory = curryN(2, syncHistoryWithStore)(browserHistory)
export const router = hh(Router)
export const createRoute = hh(Route)
export const createIndex = hh(IndexRoute)

export const route = (path, component, ...children) => {
  const props = {key: path, path, component}

  if (isEmpty(children)) {
    return createRoute(props)
  }
  return createRoute(props, children)
}

export const index = (component) => createIndex({key: 'index-route', component})
