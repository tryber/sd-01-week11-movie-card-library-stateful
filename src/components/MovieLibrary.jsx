import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: ''
    }
  }

  onSearchTextChange() {
    console.log("hey")
  }

  onBookmarkedChange() {
    console.log("hello")
  }

  onSelectedGenreChange() {
    console.log("andy")
  }

  render() {
    return (
      <SearchBar searchText={this.state.searchText} onSearchTextChange={this.onSearchTextChange} 
      bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.onBookmarkedChange}
      selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.onSelectedGenreChange}
      />
    )
  }
}

export default MovieLibrary;
