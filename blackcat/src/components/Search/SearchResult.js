import React from 'react';

import './SearchResult.css'

function SearchResult() {
  return (
    <div className="search-result-bar">
      <div className="clear-search-container">
        <div className="total-search-result">14 Results</div>
        <button className="clear-result-btn">CLEAR SEARCH</button>
      </div>
      <p className="search-result-desc">
        Searched for Channel 3 Activities from 20/06 to 24/06
      </p>
    </div>
  );
}

export default SearchResult;