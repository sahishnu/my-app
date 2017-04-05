import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import Home from './components/Home';
import ProfileContainer from './containers/ProfileContainer';

var numberOfPosts=5;
var images=[];
for(var i=0; i<numberOfPosts; i++){
  images[i]="https://unsplash.it/200/300?image="+ Math.floor((Math.random() * 1000) + 1);
}


ReactDOM.render(
  <ProfileContainer
    profilepic="https://unsplash.it/500/500/?random"
    username="sahishnu"
    bio="simple humble focussed"
    images={images}/>,
  document.getElementById('root')
);
