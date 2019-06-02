import React from 'react';
import {connect} from "react-redux";
import {selectSong} from "../actions";

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className={"item"} key={song.title}>
                    <div className={"right floated content"}>
                        <button
                            className={"ui button primary"}
                            onClick={() => {this.props.selectSong(song)}}
                        >
                            Select
                        </button>
                    </div>
                    <div className={"content"}>{song.title}</div>
                </div>
            );
        });
    }


    render() {
        return (
            <div className={"ui divided list"}>
                {this.renderList()}
            </div>
        );
    };
}


// Take in the `state` from Redux Store, make manipulation, return it
// so that connect() can map the new data to the properties of this react Component
const mapStateToProps = (state) => {
    // this.props === {songs: state.songs}
    return {songs: state.songs};
};

/**
 * Connect() : Connect the communication between provider component and child component (this)
 * B/c provider has access to Redux, we also pass in two functions that works with Redux
 * When passing action creator functions into Connect(),
 * it will call store.dispatch for you whenever you call the action creator
 * */
export default connect(
    mapStateToProps,
    {selectSong: selectSong}
)(SongList);
/*
The ()() means it is making two function calls
Here we connecting the `State` from Redux Store to
the `Props` in React Component: SongList
*/