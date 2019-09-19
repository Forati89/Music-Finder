import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const API_ADRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
    state = {artist: null, tracks: []};

    componentDidMount(){
        this.searchArtist('bruno');
    }

    searchArtist = artistQuery => {
        fetch(`${API_ADRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {
            console.log('json', json);
            if(json.artists.total > 0) {
                const artist = json.artists.items[0];
                console.log('artist', artist);
                this.setState({artist});
                fetch(`${API_ADRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then(json => this.setState({tracks: json.tracks}))
                .catch(error => alert(error.message));
            }
        })
        .catch(error => alert(error.message));
    }



    render() {
        return (
        <div>
        <h2>Music Finder</h2>
        <Search searchArtist={this.searchArtist}/>
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks}/>
        </div>

        )
    }
}


export default App;
