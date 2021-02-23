import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Username = ({ name }) => {
    if (!name) {
        return null;
    }

    const userName = `${name.title} ${name.first} ${name.last}`;
    return (
        <>
            {userName ? userName : ''}
        </>
    )
}

export default Username;