import React from 'react';
import logo from '../assets/logo.svg'

var Logo=function(props){
  return(
    <img src={logo} alt="app-logo"/>
  )
}

var Button=function(props){
  return(
    <button
      type="button"
      className="btn btn-default btn-lg">
        Explore
    </button>
  )
}

var Home=function(props){
  return(
    <div>
      <Logo/>
      <Button/>
    </div>
  )
}

export default Home;
