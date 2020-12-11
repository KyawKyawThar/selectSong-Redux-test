//Action Creator
export const selectedSong = (song) => {
  //Return an action
  return {
    type: 'SELECTED_SONG',
    payload: song,
  };
};
