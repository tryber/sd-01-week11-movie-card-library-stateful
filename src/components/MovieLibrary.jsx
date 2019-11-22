import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: "",
      bookmarkedOnly: ""
    }
  }

  onSearchTextChange() {
    console.log("hey")
  }

  onBookmarkedChange() {
    console.log("hello")
  }

  render() {
    return (
      <SearchBar searchText={this.state.searchText} onSearchTextChange={this.onSearchTextChange} bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.onBookmarkedChange}/>
    )
  }
}

export default MovieLibrary;
