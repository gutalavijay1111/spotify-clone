import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // Runs the code based on given condition. useEffect Hook ->
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      setToken(_token);

      // setting the token through Spotify Web API.
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log('😇', user);
      })
    }

    console.log('This is the token 😑', token)
  }, []);

  return (

    <div className="app">
      
    {
      token? (
        <Player />
      ) : (
        <Login />
      )
    }

    </div>
  );
}

export default App;
