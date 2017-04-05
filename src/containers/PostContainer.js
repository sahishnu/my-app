import React from 'react';
import Post from '../components/Post';
import '../styles/PostContainer.css';


var PostContainer=function(props){
  return(
    <div className="postcontainer-main">

      {props.images.map(function(imagesrc){
        return <Post imagesrc={imagesrc} key={imagesrc}/>
      })}

    </div>
  )

};

export default PostContainer;
