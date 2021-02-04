import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Useravatar = ({ picture }) => {
    
    if (!picture) {
        return null;
    }

    return (
        <>
            <img src={picture.medium} />
        </>
    )
}

export default Useravatar;