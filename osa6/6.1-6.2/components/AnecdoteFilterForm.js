import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'lodash'
import { filterAnecdotes } from '../reducers/filterAnecdoteReducer'

const AnecdoteFilterForm = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes);
    const filteredAnecdotes = useSelector(state => state.filteredAnecdotes.matchingAnecdotes);

    const { useState } = React;
    const [ filter, setFilter ] = useState('');

    const handleOnChange = (event) => {
        // typerä lodash heittäyty hankalaksi niin tällänen
        const timer = setTimeout(() => {
            dispatch(filterAnecdotes(anecdotes, event.target.value))
        }, 500)
        setFilter(event.target.value)
    }

    return (
        <>
            <h3>Filtter tings</h3>
            <input value={filter} name="filter" onChange={(event) => handleOnChange(event)} />
            <br />
            <div>
                {filteredAnecdotes && filteredAnecdotes.map(anecdote => 
                    <div key={anecdote.id}>
                        {anecdote.content}
                    </div>
                )}
            </div>

        </>
    )

}

export default AnecdoteFilterForm