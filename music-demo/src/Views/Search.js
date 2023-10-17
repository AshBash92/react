import React, { useContext, useState } from 'react';
import '../App.css';
import Context from '../context';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const { context, setContext } = useContext(Context);
    const [searchInput, setSearchInput] = useState('');
    const [spotifyData, setSpotifyData] = useState(null);

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            getData(context.access_token, searchInput);
        }
    };

    const getData = async (accessToken, searchInput) => {
        const sanitizedSearchInput = searchInput.replace(/ /g, "%20");
        const apiUrl = 'https://api.spotify.com/v1/search?q=' + {sanitizedSearchInput} + '&type=album%2Ctrack%2Cartist&market=US&limit=12&offset=4';

        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setSpotifyData(data);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="Search">
                <header className="Search-header">
                    <h1>Ongaku</h1>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField 
                            id="searchBar" 
                            label="Search for Album" 
                            variant="standard" 
                            value={searchInput}
                            onKeyPress={handleSearch}
                            onChange={handleInputChange}
                        />
                    </Box>
                    {/* <Link href="/Play">Link</Link> */}
                </header>
            </div>
        </>
    );
};

export default Search;
