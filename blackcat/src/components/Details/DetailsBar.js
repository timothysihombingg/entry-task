import React from 'react'

import Home from '../../assets/svgs/home.svg'
import Logo from '../../assets/svgs/logo-cat.svg'
import Search from '../../assets/svgs/search.svg'

import './DetailsBar.css'

function DetailsBar() {
  return (
    <div className="details-bar">
      <button className="details-bar-btn" id="details-search-btn">
        <div>
          <img src={Search} alt="search"/>Details
        </div>
        </button>
      <button className="details-bar-btn" id="details-logo-btn">
        <img src={Logo} alt="logo"/><span>Participants</span>
        </button>
      <button className="details-bar-btn" id="details-home-btn">
        <img src={Home} alt="home"/><span>Comments</span>
        </button>
    </div>
  );
}

export default DetailsBar;