import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers/counterReducer'

const store = createStore(reducer)

const App = () => {
  
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  return (
    <div>
      <button onClick={good}>good</button> 
      <button>neutral</button> 
      <button>bad</button>
      <button>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral</div>
      <div>bad</div>
    </div>
  )
}


export default App;
store.subscribe(App);