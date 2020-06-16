import * as React from 'react'

import './SearchResult.css'

function SearchResult() {
  return (
    <div className="search-result-bar">
      <div>
        <span>14 Results</span>
        <button>CLEAR SEARCH</button>
      </div>
      <p>
        Searched for Channel 3 Activities from 20/06 to 24/06
      </p>
    </div>
  );
}

export default SearchResult;