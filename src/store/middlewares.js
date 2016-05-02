import { ifElse, concat, identity } from 'ramda'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { middleware as offlineQueueMiddleware } from 'redux-queue-offline'
import freeze from 'redux-freeze'

export default function () {
  const middlewares = [
    offlineQueueMiddleware(),
    routerMiddleware(browserHistory)
  ]
  const devMiddlewares = [
    freeze
  ]
  return ifElse(
    () => __DEV__,
    concat(devMiddlewares),
    identity
  )(middlewares)
}
