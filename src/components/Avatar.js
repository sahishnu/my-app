import React from 'react';
import '../styles/Avatar.css';
var PropTypes=React.PropTypes;


var ProfilePic=function(props){
  return(
    <div className="avatar-profilepic-container">
      <img src={props.profilepic} alt="profilepic" className="avatar-profilepic"/>
    </div>
  )
}

var UserInfo=function(props){
  return(
    <div className="avatar-userinfo">
      <h2>{props.username}</h2>
      <h3>{props.bio}</h3>
    </div>
  )
}

var Avatar=function(props){
  return(
    <div className="avatar-main">
      <ProfilePic profilepic={props.profilepic}/>
      <UserInfo username={props.username} bio={props.bio} />
    </div>
  )
}

Avatar.propTypes={
  profilepic: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
}

export default Avatar;
