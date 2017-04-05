import React from 'react';
var PropTypes=React.PropTypes;
import '../styles/Post.css';


var Post=function(props){
  return(
    <div className="post-main">
      <img src={props.imagesrc} alt="post"/>
    </div>
  )
}

Post.propTypes={
  imagesrc: PropTypes.string.isRequired
}

export default Post;
