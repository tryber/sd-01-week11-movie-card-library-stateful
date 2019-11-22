import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: ""
    }
  }

  onSearchTextChange() {
    console.log("hey")
  }

  render() {
    return (
      <SearchBar searchText={this.state.searchText} onSearchTextChange={this.onSearchTextChange}/>
    )
  }
}

export default MovieLibrary;
