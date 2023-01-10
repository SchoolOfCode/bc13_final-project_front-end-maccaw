import { useState } from 'react';

export const SearchBar = ({setSearch, handleClick}) => {

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        
      
      <button onClick={handleClick}>Search</button>
    </div>
  );
}