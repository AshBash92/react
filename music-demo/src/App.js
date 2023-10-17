import React from 'react';
import './App.css';
import TokenComponent from './Components/TokenComponent'
import Search from './Views/Search';
import Play from './Views/Play';
import Context from './context';
import { useState } from 'react';

const App = () => {

  const [context, setContext] = useState({
    client_id: "abab7da00b4e4f12853c6732d72612c1",
    client_secret: "71e033f845364f63b0debc4885ca047c",
    access_token: null,
    route: 'Search'
  });

  const handleTokenReceived = (token) => {
    setContext((prevContext) => ({
      ...prevContext,
      access_token: token,
    }));
  };

  return (
    <Context.Provider value={{ context, setContext }}>
      <TokenComponent
        client_id={context.client_id}
        client_secret={context.client_secret}
        onTokenReceived={handleTokenReceived}
      />
      {context.route === 'Search' && <Search />}
      {context.route === 'Play' && <Play />}
    </Context.Provider>
  );
}

export default App;