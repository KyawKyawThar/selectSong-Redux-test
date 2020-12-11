import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ songs }) => {
  if (!songs) {
    return <div>Please Select one Song!</div>;
  }
  return (
    <div>
      <h3>Detail for: </h3>
      <p>
        Title: {songs.title}
        <br />
        Duration: {songs.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { songs: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
