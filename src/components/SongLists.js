import React from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../actions/index';

class SongLists extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectedSong(song)}>
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProp = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProp, { selectedSong })(SongLists);
