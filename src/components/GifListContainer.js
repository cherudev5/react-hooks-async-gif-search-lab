import React, { useState, useEffect } from 'react';
import GifList from './GifList'; 
import GifSearch from './GifSearch'; 

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  
  const fetchGifs = async (searchQuery) => {
    try {
      const apiKey = 'Q1BxTCd6xUOsp5fGjMMMcA5FSTgiAp8Y'; 
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${apiKey}&limit=3`
      );
      const data = await response.json();
      setGifs(data.data); 
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  useEffect(() => {
    fetchGifs('cats'); 
  }, []);

 
  const handleSearchSubmit = (searchQuery) => {
    fetchGifs(searchQuery);
  };

  return (
    <div>
      <h3>Enter a search term</h3>
      <GifSearch onSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
