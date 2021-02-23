import React from 'react';
import ReactDOM from 'react-dom'
import aneReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filteredAnecdotesReducer from './reducers/filterAnecdoteReducer'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  anecdotes: aneReducer,
  notification: notificationReducer,
  filteredAnecdotes: filteredAnecdotesReducer,
})

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
  )
