import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.svg';


var HeaderLogo=function(props){
  return(
    <div className="header-logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">| Reactagram</h2>
    </div>
  )
};

var Search=function(props){
  return(
    <div className="header-searchbar">
      <form>
        <input type="username" className="form-control" placeholder="Search"/>
      </form>
    </div>
  )
};

var Header=function(props){
  return(
    <div className="header-main">
      <HeaderLogo/>
      <Search/>
    </div>
  )
};

export default Header;
