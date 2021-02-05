import React from 'react';

const FilterForm = ({ filter, handleOnChange } ) => {
    
    return (
        <>
            filter: <input value={filter} onChange={handleOnChange} />
        </>
    )
      
}

export default FilterForm;