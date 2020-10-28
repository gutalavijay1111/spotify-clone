import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from "./Header";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./SongRow"

function Body({spotify}) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />

        <div className="body__info">
            <img src={discover_weekly?.images[0]?.url} alt="Discover Weekly" />
            <div className="body__infoText">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
            </div>     

        </div>
        <div className="body__songs">
            {/* Playlist icons */}
            <div className="body__icons">
                <PlayCircleFilledWhiteIcon  className="body__shuffle"/>
                <FavoriteBorderIcon fontSize="large" />
                <MoreHorizIcon />
            </div>
                {/* Songs List */}
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>   
        </div>


    )
}

export default Body
