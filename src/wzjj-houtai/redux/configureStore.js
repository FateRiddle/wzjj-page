import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import preloadState from './data'
import app from './reducers'

const configureStore = () => {

  const middlewares = [thunk]
  //rewrite dispatch
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  return createStore(
    app,
    preloadState,
    applyMiddleware(...middlewares),
  )
}

export default configureStore
