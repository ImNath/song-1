import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions/index.js';
class SongList extends React.Component {

renderList(){

    return this.props.songs.map((song) => {

        return (<div className="item" key={song.title}>
            <div className="right floated content">
            <div>{song.title}</div>
                <button className="ui button primary">Select</button>

            </div>
           

            
        </div>
        );
    })

}

render(){

    return (<div>{this.renderList()}</div>)
}

}

const mapStateToProps = (state) => {

    
    return {songs: state.songs};

}

export default connect(mapStateToProps, {selectSong})(SongList);