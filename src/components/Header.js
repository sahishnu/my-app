import React from 'react';

var HeaderLogo=function(props){
  return(
    <div className="HeaderLogo">
      Reactagram!
    </div>
  )
};

var Search=function(props){
  return(
    <div>
      <form>
        <input type="username" className="form-control" placeholder="Search"/>
      </form>
    </div>
  )
};

var Header=function(props){
  return(
    <div>
      <HeaderLogo/>
      <Search/>
    </div>
  )
};

export default Header;
