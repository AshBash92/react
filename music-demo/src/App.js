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
    client_id: "CLIENT_ID",
    client_secret: "CLIENT_SECRET",
    access_token: null,
    route: 'Search',
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
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/play/:title/:artist/:id/:img" element={<Play />} />
          <Route path="/*" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;