import * as React from 'react';

import Logo from '../../assets/svgs/logo-cat.svg'
import Search from '../../assets/svgs/search.svg'

import { useHistory } from 'react-router-dom'
import { getUserStorage } from '../../data/storage'

import './Bar.css'

function Bar() {
  const history = useHistory();

  return (
    <div className="header-bar">
      <button id="search-btn"><img src={Search} alt="search"/></button>
      <button id="home-btn"><img src={getUserStorage().profile_picture} alt="home" onClick={() => {
        history.push('/profile');
      }} /></button>
      <button id="logo-btn"><img src={Logo} alt="logo" onClick={() => {
        history.push('/home');
      }}/></button>
    </div>
  );
}

export default Bar;