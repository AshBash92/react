import React from 'react';
import './App.css';
import TokenComponent from './Components/TokenComponent';
import Search from './Views/Search';
import Play from './Views/Play';
import Context from './context';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [context, setContext] = useState({
    // You need to have a Spotify account and create an app on their dashboard
    client_id: "abab7da00b4e4f12853c6732d72612c1",      // Put Spotify client_id here
    client_secret: "b3995e1b6c9e4fbfb1a9460681c1be19",  // Put Spotify client_sercret here
    access_token: null,                                 // Initializes access_token to be fetched later
    route: 'Search',                                    // Home page set to 'Search'
  });

  const handleTokenReceived = (token) => {
    setContext((prevContext) => ({
      ...prevContext,
      access_token: token,
    }));
  };

  return (
    <Context.Provider value={{ context, setContext }}>

      {/* Token Component - fetches and passes the Access Token */}
      <TokenComponent
        client_id={context.client_id}
        client_secret={context.client_secret}
        onTokenReceived={handleTokenReceived}
      />

      {/* Router Setup - use this to navigate to other views */}
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />                       {/* Route for the 'Search' view */}
          <Route path="/play/:title/:artist/:id/:img" element={<Play />} />   {/* Route for the 'Play' view */}
          <Route path="/*" element={<Search />} />                            {/* Default route is 'Search' */}
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;