import React from 'react';

const Persons = ({ persons, filter}) => {
    return (
        <>
            {persons.filter(filterPerson => filterPerson.name
                .toLowerCase()
                .includes(filter.toLowerCase())).map(person => (
                <p key={person.name}>{person.name} - {person.phone}</p>
            ))}
        </>
        )
}

export default Persons;