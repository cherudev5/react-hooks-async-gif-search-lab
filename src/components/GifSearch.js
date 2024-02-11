import React, { useState } from 'react';

const GifSearch = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');


  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchQuery); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for GIFs..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">Find GIfs</button>
      </form>
    </div>
  );
};

export default GifSearch;
