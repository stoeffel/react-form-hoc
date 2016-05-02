import ReactDOM from 'react-dom'

export const promised = (fn) => (...args) => Promise.resolve(fn(...args))

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
export const elementById = promised(document.getElementById.bind(document))
export const render = promised(ReactDOM.render)
