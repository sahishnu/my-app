import React from 'react';
import Post from '../components/Post';
import '../styles/PostContainer.css';


var PostContainer=function(props){

  return(
    <div className="postcontainer-main">
      <Post imagesrc={props.imagesrc}/>
    </div>
  )

};

export default PostContainer;
