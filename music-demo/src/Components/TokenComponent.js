// Token Component - Provides Access Token needed to use the Spotify API

import React, { useState, useEffect } from 'react';

function TokenComponent({ client_id, client_secret, onTokenReceived }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    //This function is responsible for fetching access token
    const getToken = async () => {
      const url = 'https://accounts.spotify.com/api/token';
      const data = new URLSearchParams();
      data.append('grant_type', 'client_credentials');
      data.append('client_id', client_id);
      data.append('client_secret', client_secret);

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: data.toString(),
        });

        if (response.ok) {
          const tokenData = await response.json();
          onTokenReceived(tokenData.access_token);
        } else {
          setError(`Failed to fetch token: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        setError(`Error: ${error}`);
      }
    };

    getToken();
  }, [client_id, client_secret, onTokenReceived]);

  // If error, display on screen
  // if (error) {
  //   return <div>{error}</div>;
  // }

  return null;
}

export default TokenComponent;