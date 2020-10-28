import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();


  // Runs the code based on given condition. useEffect Hook ->
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {

      dispatch({            // pushing token into DataLayer
        type: 'SET_TOKEN',
        token: _token,
      })

      // setting the token through Spotify Web API.
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type : 'SET_USER',
          user: user,
        });
      });
    }

  }, []);

  // console.log('😇', user);
  // console.log('🤐', token)

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
