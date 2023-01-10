import { useState } from 'react';

export const SearchBar = () => {
  const [search, setSearch] = useState('');

 
  async function handleClick(){
    console.log(search)
 }
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        
      
      <button onClick={handleClick}>Search</button>
    </div>
  );
}