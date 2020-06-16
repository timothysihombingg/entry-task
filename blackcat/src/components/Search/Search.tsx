import * as React from 'react'

import './Search.css'

function Search() {
  return (
    <div className="search-page">
      <div className="search-bar-title"><u>DATE</u></div>
      <div className="search-btn-container">
        <button>ANYTIME</button>
        <button>TODAY</button>
        <button>TOMORROW</button>
        <button>THIS WEEK</button>
        <button>THIS MONTH</button>
        <button>LATER</button>
      </div>
      <div className="search-bar-title"><u>CHANNEL</u></div>
      <div className="search-btn-container">
        <button>All</button>
        <button>Channel 3</button>
        <button>Channel 4</button>
      </div>
      <div className="search-btn">
        <div>
          <img src="" alt=""/>
          SEARCH
        </div>
        <p>All activities</p>
      </div>
    </div>
  );
}

export default Search;