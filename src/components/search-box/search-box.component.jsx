import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleSearchChange }) => (
    <input
        className='search'
        type='serach'
        placeholder={placeholder}
        onChange={handleSearchChange} ></input>

);
