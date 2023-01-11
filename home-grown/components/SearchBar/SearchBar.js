import { useState } from 'react';
import styles from '../../styles/ListingContainer.module.css'


export const SearchBar = ({setSearch, handleClick, clear}) => {

  return (
    <div className={styles["search-container"]}>
      <input className={styles["input-bar"]} type="text" placeholder="Search by postcode or crop name" onChange={(e) => setSearch(e.target.value)} />
      <div className={styles["button-container"]}>
      <button className={styles["search-button"]} onClick={handleClick}>Search</button>
      <button className={styles["clear-button"]} onClick={clear}>Clear</button>
      </div>
    </div>
  );
}