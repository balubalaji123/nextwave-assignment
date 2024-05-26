import React from 'react';
import '../styles/Filter.css';
const Filter = ({ onSearch, onTagFilterChange }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  

  return (
    <div className='filter-search'>
      <input
        type="text"
        placeholder="Search ..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Filter;
