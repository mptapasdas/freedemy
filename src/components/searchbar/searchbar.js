import React from "react";
import "./searchbar.css";

const SearchBar = (props) => {
  const { onSearch } = props;
  return (
    <div className='col-12 mt-5 search-hold'>
      <div className='d-flex flex-row justify-content-center p-3'>
        <input
          id='search-input'
          className='searchbox'
          type='search'
          placeholder='javascript'
          onChange={({ target }) => {
            onSearch(target.value.toLowerCase());
          }}
        />
        <button type='button' className='p-2 search-icon'>
          <i className='fas fa-search'></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
