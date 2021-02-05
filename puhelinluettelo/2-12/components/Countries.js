import React from 'react';

const Countries = ({ countries, filter }) => {
    
    const { useEffect, useState } = React;

    const [ filterCount, setFilterCount ] = useState(0);

    useEffect(() => {
        const count = 
            countries && countries
            .filter(filterCountry => filterCountry.name
            .toLowerCase()
            .includes(filter.toLowerCase())
        );
        setFilterCount(count.length);
    })
    
    if (filterCount > 10) {
        return (
            <p>too many matches lol</p>
        )
    }
    if (filterCount === 1) {
        return (
            countries.filter(filterCountry => filterCountry.name
                .toLowerCase()
                .includes(filter.toLowerCase())).map(country => {
                    return (
                        <div key={country.name}>
                            <h2>{country.name}</h2>
                            <p>capital {country.capital}</p>
                            <p>population {country.population}</p>
                            <p>languages {country.languages.map(lang => 
                                <ul>
                                    <li>{lang.name}</li>
                                </ul>
                            )}</p>
                            <img style={{ height: '50px'}} src={country.flag} />
                        </div>
                    )
                })
        )
    }

    return (
        <>
            {countries && countries.filter(filterCountry => filterCountry.name
                .toLowerCase()
                .includes(filter.toLowerCase())).map(country => {
                    return (
                        <div key={country.name}>
                            <p key={country.name}>{country.name}</p>
                        </div>
                    )
                })}
        </>
        )
}

export default Countries;