import React, { useEffect, useState } from 'react'
import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setFilter ] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newPerson = {
      name : newName,
    }

    const isNameTwice = persons.some(persons => persons.name === newName);
    
    // voisi pienentää kirjaimet
    if (isNameTwice) {
      alert(`${newName} exists!`)
      return
    }
    
    const addPerson = [
      ...persons,
    {
      name: newName,
      phone: newPhone || '',
    }]

    setPersons(addPerson); 
    setNewName('');
    setNewPhone('');
  }

  const handleOnNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleOnPhoneChange = (event) => {
    setNewPhone(event.target.value);
  }
  
  const handleOnFilterChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm filter={filter} handleOnChange={handleOnFilterChange} />
      <br/>
      <br />
      <PersonForm 
        onSubmit={handleSubmit}
        newName={newName}
        newPhone={newPhone}
        handleOnPhoneChange={handleOnPhoneChange}
        handleOnNameChange={handleOnNameChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
      
    </div>
  )

}

export default App