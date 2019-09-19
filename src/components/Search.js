import React, { Component } from "react";
import { Button } from 'reactstrap';

class Search extends Component {

      state = {artistQuery: ''}


  handleKeyPress = event => {
    if (event.key === "Enter") this.searchArtist();
  };


  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };

  searchArtist = () => {

      this.props.searchArtist(this.state.artistQuery);

  }


  render() {
    return (
      <div className="searchBar">
              <input
                type="text"
                onChange={this.updateArtistQuery}
                name="email"
                id="searchArtist"
                placeholder="Search for an Artist"
                onKeyPress={this.handleKeyPress}
                className="searchInput"
              />
            <Button
             onClick={this.searchArtist}
             color="primary"
              style={{backgroundColor: 'black', border: '0px'}}>
              Search
            </Button>
      </div>
    );
  }
}

export default Search;