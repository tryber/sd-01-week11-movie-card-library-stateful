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
      movies: props.movies
    };
  }

  changeHandlerSearchText = event => this.setState({ searchText: event.target.value });

  changeHandlerBookmarkedOnly = event =>
    this.setState({ bookmarkedOnly: event.target.checked });

  changeHandlerSelectedGenre = event =>
    this.setState({ selectedGenre: event.target.value });

  changeHandlerMovies = event => this.setState({ movies: [ ...this.state.movies, event] });

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={event => this.changeHandlerSearchText(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={event => this.changeHandlerBookmarkedOnly(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={event => this.changeHandlerSelectedGenre(event)}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie movies = {event => this.changeHandlerMovies(event)}/>
      </div>
    );
  }
}

export default MovieLibrary;
