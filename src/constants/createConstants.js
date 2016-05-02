import { compose, curry } from 'ramda'
import createConstants, { namespace } from 'create-constants'

export const APP_NAME = 'my-app'
export const appNamespace = namespace(`${APP_NAME}/`)
export const constants = curry((ns, keys) => compose(
  appNamespace,
  namespace(ns + '/'),
  createConstants
)(keys))
