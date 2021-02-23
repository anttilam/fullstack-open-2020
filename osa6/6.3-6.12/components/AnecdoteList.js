import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setAnecVote } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const sortByHighestVotes = anecdotes.sort((a,b) => b.votes - a.votes);
    
    const handleClick = (id, content) => {
        return () => {
            dispatch(vote(id))
            dispatch(setAnecVote(content));            
        }
    }
    return (
        <>
        {sortByHighestVotes && sortByHighestVotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                {' '}<button onClick={handleClick(anecdote.id, anecdote.content)}>vote</button>
            </div>
            </div>
        )}
      </>
    )
}

export default AnecdoteList