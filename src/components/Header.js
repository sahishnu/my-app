import React from 'react';
import '../styles/Header.css';


var HeaderLogo=function(props){
  return(
    <div className="header-logo">
      <h3>Reactagram!</h3>
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
