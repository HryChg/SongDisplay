import React from 'react';
import {connect} from "react-redux";

// this is a functional component
const SongDetails = (props) =>{
    const selectedSong = props.selectedSong;
    let songTitle    = !selectedSong? '' : selectedSong.title;
    let songDuration = !selectedSong? '' : selectedSong.duration;

    return (
        <div className="ui card">
            <div className="content">
                <div>Song Title: {songTitle}</div>
            </div>
            <div className="content">
                <div>Duration: {songDuration}</div>
            </div>
        </div>
    );
};

// map the state from Redux Store to the property of this React Component
const mapStateToProps = (state) => {
    return {selectedSong: state.selectedSong};
};

// connect the communication between this component and the Provider Component
export default connect(mapStateToProps)(SongDetails);