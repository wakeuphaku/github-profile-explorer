import './Search.css';
import React, { useEffect } from 'react';
export default function Search({ searchText, handleSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(searchText);
    console.log(searchText);
  }

  useEffect(() => {
    searchText.value = searchText;
  }, [searchText]);

  return (
    <div className="search">
      <form action="" className="search__form" name="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type username..."
          className="search__input"
          defaultValue={searchText}
        />
        <button type="submit" className="search__button">
          Find
        </button>
      </form>
    </div>
  );
}
