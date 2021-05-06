import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../SearchBar/SearchBar.module.css'

function SearchBar({ placeholder, handleChange }) {
  
  return (
    <div className={styles.searchContainer}>
    <FontAwesomeIcon icon={faSearch} color="#BDBDBD" />
      <input className={styles.searchBar} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
