import React from 'react'

import Home from '../../assets/svgs/home.svg'
import Logo from '../../assets/svgs/logo-cat.svg'
import Search from '../../assets/svgs/search.svg'

import './Bar.css'

function Bar() {
  return (
    <div className="header-bar">
      <button className="bar-btn" id="search-btn"><img src={Search} alt="search"/></button>
      <button className="bar-btn" id="logo-btn"><img src={Logo} alt="logo"/></button>
      <button className="bar-btn" id="home-btn"><img src={Home} alt="home"/></button>
    </div>
  );
}

export default Bar;