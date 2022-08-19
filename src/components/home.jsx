import React, { useEffect, useState } from 'react';
import Bar from './bar'
//import Header from './header'
import Cardgroup from './cardgroup'
//import Slideshow from './slideshow'
import Profile from './profile'

function Home() {
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
        <div  >
            
            <Bar />
        <Profile user = {name} repos = {repos} avatar = {avatar} bio = {bio} />
        <Cardgroup />
        </div>
        
    );
}

export default Home;