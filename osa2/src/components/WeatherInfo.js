import React from 'react';
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

const WeatherInfo = ({ country, filterCount }) => {

    const { useEffect, useState } = React;
    /* axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERAPIKEY}&query=Finland/`)*/

    useEffect(() => {
        axios.get('http://localhost:3001/weather')
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }, [filterCount])

    return (
        <>
            {country.name}
        </>
    )
}

export default WeatherInfo;
