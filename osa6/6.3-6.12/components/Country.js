import React from 'react';
import WeatherInfo from './WeatherInfo';

const Country = ({ country, filterCount }) => {
    
    const { useState } = React;

    const [ isCountryStatsShowing, setIsCountryStatsShowing ] = useState(false);

    if (filterCount === 1) {
        return (
            <>
                <h2>{country.name} {filterCount}</h2>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <div>languages {country.languages.map(lang => 
                    <ul>
                        <li>{lang.name}</li>
                    </ul>
                )}</div>
                <img style={{ height: '50px'}} src={country.flag} />
                <WeatherInfo country={country} />
            </>
        )
    }
    
    return (
        <>
        {country.name}{' '}
        <button onClick={() => setIsCountryStatsShowing(!isCountryStatsShowing)}>
            {isCountryStatsShowing ? 'hide' : 'show'} 
        </button>
        
        {isCountryStatsShowing && (
            <>
                <h2>{country.name}</h2>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <div>languages {country.languages.map(lang => 
                    <ul>
                        <li>{lang.name}</li>
                    </ul>
                )}</div>
                <img style={{ height: '50px'}} src={country.flag} />
                <WeatherInfo country={country} />
            </>
        )}
        </>
    )
}

export default Country;