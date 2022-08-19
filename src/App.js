import React, { useEffect, useState } from 'react';
import './App.css';
//import ReactDOM from 'react-dom';
import './index.css';
//import * as serviceWorker from './serviceWorker';
//import Navi from './components/navi'
import Bar from './components/bar'
//import Header from './components/header'
import Cardgroup from './components/cardgroup'
//import Slideshow from './components/slideshow'
import Profile from './components/profile'
import { Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';

function App() {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://api.github.com/users/robertludwick')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, []);
  
  const setData = ({ name, login, followers, following, public_repos, avatar_url, bio}) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setBio(bio);
  }
  
  return (
    
    <React.StrictMode>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/about" component={Cardgroup}>
      </Route>
    </Routes>
  </React.StrictMode>
  );
}

export default App;
