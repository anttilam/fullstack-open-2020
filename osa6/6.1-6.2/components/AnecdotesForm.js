import React from 'react'
import { useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'
import { setNewAnec } from '../reducers/notificationReducer'

const AnecdotesForm = () => {
    const { useState } = React;

    const [ ane, setAne ] = useState('');
    
    const dispatch = useDispatch()
    
    const handleOnChange = (event) => {
        setAne(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addNew(ane));
        dispatch(setNewAnec(ane));
    }

    console.log(ane);
    return (
        <>
        <h2>create new</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div><input value={ane} onChange={(e) => handleOnChange(e)}/></div>
            <button type="submit">create</button>
        </form>
        </>
    )
}

export default AnecdotesForm