import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import '../App.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Link } from 'react-router-dom';


const Play = () => {
    const { title, artistName, id, img } = useParams(); //Use this to grab more spotify data
    const theme = useTheme();
     
    return (
        <>
            <div className="Play">
                <header className="Play-header">
                    <Link to="/search" style={{textDecoration: 'none', color: 'white'}}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{fontWeight: 'bold'}}>Ongaku</p>
                            <MusicNoteIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                        </Box>
                    </Link>
                </header>

                {/* Embedded Player */}
                <iframe src={`https://open.spotify.com/embed/track/${id}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </>
    );
}

export default Play;