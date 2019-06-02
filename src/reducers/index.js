import {combineReducers} from "redux";

export const songsReducer = () => {
    // the return value of this reducer is always a fixed list of songs
    // it never does anything to incoming actions
    return [
        {title: 'No Scrubs', duration: '4.05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I Want It That Way', duration: '1:45'}
    ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
      return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});