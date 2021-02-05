import React from 'react'
import FilterForm from './components/FilterForm';
import Countries from './components/Countries';
import axios from 'axios';

const App = () => {
  
  const { useEffect, useState } = React;

  const [ countries, setCountries] = useState([])
  const [ filter, setFilter ] = useState('');
  
  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/countries')
    //axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled');
      setCountries(response.data);
    })
    .catch(error => {
      console.log('error')
    })
  },[]);

  console.log('render', countries.length, 'countries');

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  const handleOnFilterChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <h2>2.12 Maiden tiedot</h2>
      <p>google-chrome  --user-data-dir=”/var/tmp/Chrome” --disable-web-security</p>
      <FilterForm filter={filter} handleOnChange={handleOnFilterChange} />
      <br/>
      <br />
      <Countries countries={countries} filter={filter} />
    </div>
  )

}

export default App