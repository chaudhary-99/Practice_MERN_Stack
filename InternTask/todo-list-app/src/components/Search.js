import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="search-bar">
      <div className="input-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && <FaTimes className="clear-icon" onClick={handleClear} />}
      </div>
    </div>
  );
};

export default SearchBar;
