import React, { useEffect, useState } from 'react'
import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import phonebook from './services/phonebookServices';

const App = () => {
  
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setFilter ] = useState('');
  const [ notification, setNotification ]  = useState('');
  const [ notificationType, setNotificationType ]  = useState('');

  useEffect(() => {
    refreshView();
  }, [])

  const refreshView = () => {
    phonebook.getAll()
    .then(allPersons => {
      setPersons(allPersons)
    })
    .catch(error => {
      const { response } = error;
      const { status, statusText } = response;
      handleNotification(`${status} ${statusText}`, 'error')
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Collect person data from state
    const newPerson = {
      name : newName,
      phone: newPhone || '',
    }
    
    const personExists = persons && persons.length > 0 && persons.some(persons => persons.name.toLowerCase() === newName.toLowerCase());

    if (personExists) {
      
      const foundPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
      const updatedPerson = {...foundPerson, phone: newPhone}
      handleUpdate(updatedPerson); 

    } else {
      handleCreateNew(newPerson);
    }
  }

  const handleUpdate = (updatedPerson) => {
    return phonebook.update(updatedPerson.id, updatedPerson)
      .then(updatedPerson => {        
        setPersons(persons.map(person => 
           person.id === updatedPerson.id ? updatedPerson : person 
        ))
        refreshView();
        return;
      })
      .catch(error => {
        handleNotification(error.response.statusText, 'error')
      })
  }

  const handleCreateNew = (newPerson) => {
    phonebook.createNew(newPerson)
      .then(newPerson => {
        const addNewPersonToPersons = [
          ...persons,
        {
          name: newPerson.name,
          phone: newPerson.phone || '',
        }]
        handleNotification(`Added ${newPerson.name}`);
        setPersons(addNewPersonToPersons);
        setNewName('');
        setNewPhone('');
        refreshView();
        // tääkin käy setPersons(persons.concat(newPerson))
      }).catch(error => {
        console.log('postissa kävi virhe', 'error');
      })
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

  const handleDelete = (id) => {
    console.log("olen ID", id)
    phonebook.deletePerson(id)
    .then(deletedPerson => {
      setPersons(persons.filter(person => person.id !== id))
      refreshView();
    })
    .catch((error) => {
      console.log("olen handleDelete", error);
      // handleNotification(errorObject.statusText, type)
    });
  }

  const handleNotification = (message, type) => {
    setNotification(message)
    setNotificationType(type || null)
    
    setTimeout(() => {
      setNotification(null)        
    }, 2000);
  }

  return (
    <div style={{position: 'relative'}}>
      <h2>Phonebook</h2>
      <Notification message={notification} type={notificationType}/>
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
      {persons && persons.length > 0 && persons.filter(filterPerson => filterPerson.name
          .toLowerCase()
          .includes(filter.toLowerCase())).map(person => (
            <Persons key={person.name} handleDelete={() => handleDelete(person.id)} person={person} />
          )
        )
      }
  </div>
  )
}

export default App