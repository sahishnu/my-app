import React from 'react';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import PostContainer from '../containers/PostContainer';

var ProfileContainer=function(props){
  return(
    <div>
      <Header />
      <Avatar
        profilepic={props.profilepic}
        username={props.username}
        bio={props.bio}/>
      <PostContainer
        images={props.images}/>
    </div>
  )
}

export default ProfileContainer;
