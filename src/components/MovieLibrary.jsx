import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: props.movies
    }
  }

  changeHandlerText(event) {
    this.setState({ searchText: event.target.value })
  }

  changeHandlerCheckbox(event) {
    this.setState({ bookmarkedOnly: event.target.checked })
  }

  changeHandlerGenre(event) {
    this.setState({ selectedGenre: event.target.value })
  }

  render() {
    return (
      <div>
        <h2> My Awesome Movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.changeHandlerText(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event) => this.changeHandlerCheckbox(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.changeHandlerGenre(event)}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
