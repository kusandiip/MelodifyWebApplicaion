import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./melodify";
import melodifyApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
const melodify = new melodifyApi();

function App() {
  // run code based on given condition
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      melodify.setAccessToken(_token);
      melodify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      // to get playlist dynamically
      melodify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      melodify.getPlaylist("37i9dQZEVXcQ9COmYvdajy").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);
  return (
    <div className="app">
      {token ? <Player melodify={melodify} /> : <Login />}
    </div>
  );
}

export default App;
