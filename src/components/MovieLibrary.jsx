import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  changeHandler = event => {
    const { name, value } = event.target
    console.log(name,value)
    this.setState(() => ({
      [name]: value
    }))
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeHandler}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChang={this.changeHandler}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeHandler} />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
