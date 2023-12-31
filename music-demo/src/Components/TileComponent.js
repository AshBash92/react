// Tile Component - Tiles Spotify Results

import React, { useState, useEffect, Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import { Link } from 'react-router-dom';

const Tile = ({ index, data }) => {
    const [isTileVisible, setIsTileVisible] = useState(false); // For tile visibility

    useEffect(() => {
        // Tile becomes visible
        setIsTileVisible(true);
    }, []);

    if (data.tracks && Array.isArray(data.tracks.items) && data.tracks.items[index]) {
        // Spotify data
        const title = data.tracks.items[index].name;
        const artist = data.tracks.items[index].artists[0].name;
        const id = data.tracks.items[index].id;
        const cover = data.tracks.items[index].album.images[1]?.url;

        if (cover) {
            const modifiedCover = cover.replace(/^https:\/\/i\.scdn\.co\/image\//, ''); //Only grab most identifiable part of the URL

            return (
                <Grow in={isTileVisible} timeout={1000}>
                    <Link style={{ textDecoration: 'none' }} to={`/play/${title}/${artist}/${id}/${modifiedCover}`}>
                        <Card className='tile' sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 275 }}
                                image={cover}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom variant="h5"
                                    component="div"
                                    style={{
                                        maxWidth: '30vw',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {artist}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grow>
            );
        }
    }
    
    // This div appears in the event there is no data
    return <div>No data available</div>;
};

// This displays a max of 12 tiles, can be edited to be more dynamic
// Possibly add a 'Load More' button
const Tiles = ({ data }) => {
    return (
        <>
            <div className="tile-row">
                <Tile index='0' data={data} />
                <Tile index='1' data={data} />
                <Tile index='2' data={data} />
                <Tile index='3' data={data} />
            </div>
            <div className="tile-row">
                <Tile index='4' data={data} />
                <Tile index='5' data={data} />
                <Tile index='6' data={data} />
                <Tile index='7' data={data} />
            </div>
            <div className="tile-row">
                <Tile index='8' data={data} />
                <Tile index='9' data={data} />
                <Tile index='10' data={data} />
                <Tile index='11' data={data} />
            </div>
        </>
    );
};

export default Tiles;
