import React from 'react';

const Notification = ({ message, type = 'success' }) => {
    
    if (!message) return null;

    const notificationStyle = {
        position: 'absolute',
        width: '300px', 
        border: '1px dashed black',
        padding: '10px',
        fontSize: '20px',
        margin: '20px auto',
        display: 'block',
        textAlign: 'center',
        right: 0,
        
        success: {
            color: 'green',
        },
        error: {
            color: 'red',
        }
    }

    return (
        <div style={notificationStyle}>
            <i style={notificationStyle[type]}>{message}</i>
        </div>
    )
}

export default Notification