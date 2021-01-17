import React, { useEffect, useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navi from './components/navi'
import Bar from './components/bar'
import Header from './components/header'
import Cardgroup from './components/cardgroup'
import Slideshow from './components/slideshow'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://api.github.com/users/robertludwick')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, []);
  
  const setData = ({ name, login, followers, following, public_repos, avatar_url}) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  }
  
  return (
    <React.StrictMode>
    <Bar />
    <Slideshow user = {userName} repos = {repos} />
    <Cardgroup />
  </React.StrictMode>
  );
}

export default App;
