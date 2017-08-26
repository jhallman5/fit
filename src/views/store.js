//Contains all the redux logic
import {applyMiddleware, createStore} from 'redux'
import * as User from './actions/user'

import reducers from './reducers'

const logger = (store) => (next) => (action) => {
  console.log( 'action!', action )
  next(action)
}

const middleware = applyMiddleware(logger)

export default createStore(reducers, middleware)
