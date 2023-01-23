import { useState } from "react";
import styles from "../../styles/ListingContainer.module.css";

export const SearchBar = ({
  search,
  setSearch,
  handleClick,
  handleClear,
  searchRef,
}) => {
  return (
    <div className={styles["search-container"]}>
      <input
        className={styles["input-bar"]}
        ref={searchRef}
        type="text"
        placeholder="Search by postcode or crop name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles["button-container"]}>
        <button className={styles["search-button"]} onClick={handleClick}>
          Search
        </button>
        <button className={styles["clear-button"]} onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};
