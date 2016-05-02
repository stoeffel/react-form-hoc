import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as offlineQueue } from 'redux-queue-offline'
import { reducer as form } from 'redux-form'
import app from './app'
import fake from './fake'

export default combineReducers({
  app,
  fake,
  routing,
  offlineQueue,
  form
})
