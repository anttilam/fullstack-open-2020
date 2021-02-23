import React from 'react'
import AnecdotesForm from './components/AnecdotesForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/AnecdoteNotification'
import AnecdoteFilterForm from './components/AnecdoteFilterForm'


const App = () => {
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteFilterForm />
      <AnecdotesForm />
      <AnecdoteList />
    </div>
  )
}

export default App