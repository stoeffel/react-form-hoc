import { jsdom } from 'jsdom'

global.document = jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator
global.localStorage = window.localStorage
global.__DEV__ = true
window.__TESTING__ = true
global.__TESTING__ = true
