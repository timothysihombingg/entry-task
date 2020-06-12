import React from 'react';

import './Search.css'

function Search() {
  return (
    <div className="search-page">
      <div className="search-bar-title"><u>DATE</u></div>
      <div className="search-btn-container">
        <button className="date-btn">ANYTIME</button>
        <button className="date-btn">TODAY</button>
        <button className="date-btn">TOMORROW</button>
        <button className="date-btn">THIS WEEK</button>
        <button className="date-btn">THIS MONTH</button>
        <button className="date-btn">LATER</button>
      </div>
      <div className="search-bar-title"><u>CHANNEL</u></div>
      <div className="search-btn-container">
        <button className="channel-btn">All</button>
        <button className="channel-btn">Channel 3</button>
        <button className="channel-btn">Channel 4</button>
      </div>
      <div className="search-btn">
        <div className="search-img-btn">
          <img src="" alt=""/>
          SEARCH
        </div>
        <p className="search-btn-info">All activities</p>
      </div>
    </div>
  );
}

export default Search;