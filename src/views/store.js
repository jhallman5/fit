//Contains all the redux logic
import {applyMiddleware, combineReducers, createStore} from 'redux'


const logger = (store) => (next) => (action) => {
  console.log( 'action!', action )
  next(action)
}

const middleware = applyMiddleware(logger)

const userReducer = (state={}, action) =>{
  switch(action.type) {
    case 'Change_Name': {
      return {...state, name: action.payload}
      break
    }
    case 'Change_Age': {
      return {...state, age: action.payload}
      break
    }
  }
  return state
}

const tweetReducer = ( state={}, action) => {
  return state
}
//
// const reducers = function(state, action) {
//   if(action.type === 'INC'){
//     return state + action.payload
//   }
//   return state
// }

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetReducer
})

const store = createStore(reducers, {
  user: {
    name: 'John',
    age: 27
  },
  tweets: []
}, middleware)

store.subscribe(() => {
  console.log('Store Changed!', store.getState())
})

store.dispatch({type: 'INC', payload:1})
store.dispatch({type: 'INC', payload:1})
store.dispatch({type: 'INC', payload:1})
store.dispatch({type: 'INC', payload:1})
store.dispatch({type: 'INC', payload:1})
store.dispatch({type: 'INC', payload:1})

export default createStore(reducers, middleware)
