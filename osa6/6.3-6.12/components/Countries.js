import React from 'react';
import Country from './Country';

function usePrevious(value) {
    const { useRef, useEffect } = React;
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

const Countries = ({ countries, filter }) => {
    
    const { useEffect, useState } = React;

    const [ filterCount, setFilterCount ] = useState(0);
    const prevFilterCount = usePrevious(filterCount);

    useEffect(() => {
        console.log('render COUNTRIES useEffect');
        const count = 
            countries && countries
            .filter(filterCountry => filterCountry.name
            .toLowerCase()
            .includes(filter.toLowerCase())
        );
        setFilterCount(count.length);
        if (filterCount !== prevFilterCount) {
            console.log('garf');
        }
    }, [filterCount])
    
    if (filterCount > 10) {
        return (
            <p>too many matches lol. Needs to be less than 10</p>
        )
    }
    const countriesFiltered = countries && countries.filter(filterCountry => filterCountry.name.toLowerCase().includes(filter.toLowerCase()));
    
    console.log('render COUNTRIES', filterCount, 'filterCount');
    console.log('render COUNTRIES', prevFilterCount, 'PREVIOUS filterCount');
    return (
        <>
            {countriesFiltered.length > 10 ? 'too many matches, need less than 10' : countriesFiltered.map(country => {
                    return (
                        <div key={country.name}>
                            <div>
                                <Country country={country} filterCount={filterCount} />
                            </div>
                        </div>
                    )
                })}
            {}
        </>
        )
}

export default Countries;