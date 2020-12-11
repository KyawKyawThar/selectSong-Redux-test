import { combineReducers } from 'redux';
const songReducer = () => {
  return [
    { title: 'Baby', duration: '4:05' },
    { title: 'Ocean', duration: '3:47' },
    { title: 'So Far away', duration: '3:59' },
    { title: 'My Love', duration: '3:00' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SELECTED_SONG':
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
