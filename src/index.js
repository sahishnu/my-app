import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import Home from './components/Home';
import ProfileContainer from './containers/ProfileContainer';



ReactDOM.render(
  <ProfileContainer
    profilepic="https://unsplash.it/500/500/?random"
    username="sahishnu"
    bio="simple humble focussed"
    imagesrc="https://unsplash.it/500/500/?random"/>,
  document.getElementById('root')
);
