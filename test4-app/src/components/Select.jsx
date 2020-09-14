import React from 'react'

const Select = ({ handleSelect }) => {
    return (
        <select onChange={handleSelect}>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )
}

export default Select