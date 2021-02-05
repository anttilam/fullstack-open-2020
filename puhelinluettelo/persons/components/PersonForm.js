import React from 'react';


const PersonForm = (
{ 
    newName,
    newPhone,
    onSubmit,
    handleOnPhoneChange,
    handleOnNameChange 
}) => {

    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={newName} onChange={handleOnNameChange} />
                phöne: <input value={newPhone} onChange={handleOnPhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        )
}

export default PersonForm;