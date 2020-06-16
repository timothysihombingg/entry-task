import * as React from 'react';

import Home from '../../assets/svgs/home.svg'
import Logo from '../../assets/svgs/logo-cat.svg'
import Search from '../../assets/svgs/search.svg'

import './Bar.css'

function Bar() {
  return (
    <div className="header-bar">
      <button id="search-btn"><img src={Search} alt="search"/></button>
      <button id="home-btn"><img src={Home} alt="home"/></button>
      <button id="logo-btn"><img src={Logo} alt="logo"/></button>
    </div>
  );
}

export default Bar;