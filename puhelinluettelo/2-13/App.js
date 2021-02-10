import React from 'react'
import FilterForm from './components/FilterForm';
import Countries from './components/Countries';
import Country from './components/Country';
import axios from 'axios';


/* weather api access key: {process.env.REACT_APP_WEATHERAPIKEY} */
/* http://api.weatherstack.com/ */
/* 
// Current Weather API Endpoint

http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York
    
// optional parameters: 

    & units = m
    & language = en
    & callback = MY_CALLBACK

http://api.weatherstack.com/forecast
    ? access_key = YOUR_ACCESS_KEY
    & query = New York
    
// optional parameters: 

    & forecast_days = 7
    & hourly = 1
    & interval = 3
    & units = m
    & language = en
    & callback = MY_CALLBACK


    */


  function usePrevious(value) {
    const { useRef, useEffect } = React;
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }


const App = () => {
  
  const { useEffect, useState } = React;

  const [ countries, setCountries] = useState([])
  const [ filter, setFilter ] = useState('');
  const prevCountries = usePrevious(countries);

  useEffect(() => {
    console.log('effect');
    //axios.get('https://restcountries.eu/rest/v2/all')
    axios.get('http://localhost:3001/countries')
    .then(response => {
      console.log('promise fulfilled');
        setCountries(response.data);
    })
    .catch(error => {
      console.log('error')
    })
  },[]);

  console.log('render APP', countries.length, 'countries');

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  const handleOnFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const countriesFiltered = countries && countries.filter(filterCountry => filterCountry.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>2.12 Maiden tiedot</h2>
      <p>google-chrome  --user-data-dir=”/var/tmp/Chrome” --disable-web-security</p>
      <p>{process.env.REACT_APP_WEATHERAPIKEY}</p>
      <FilterForm filter={filter} handleOnChange={handleOnFilterChange} />
      <br/>
      <br/>
      {countriesFiltered.length > 10 ? 
        (
          'too meni lol, need less than 10'
        ) : 
        (
          countriesFiltered.map(country => 
            <div key={country.name}>
              <Country country={country} filterCount={countriesFiltered.length} />
            </div>
        )
      )}
    </div>
  )

}

export default App