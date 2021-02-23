import React from 'react';

const Persons = ({ person, handleDelete }) => {
    return (
        <div key={person.id}> 
            <p key={person.id}>{person.name} - {person.phone} <button onClick={handleDelete}>poista lol</button></p>
        </div>
        )
}

export default Persons;