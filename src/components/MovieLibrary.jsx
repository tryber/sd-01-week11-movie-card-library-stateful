import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      searchText: '',
      onSearchTextChange: '',
      bookmarkedOnly: false,
      onBookmarkedChange: '',
      selectedGenre: '',
      movies: props.movies,
      onSelectedGenreChange: '',
    };
    this.addNewFilm = this.addNewFilm.bind(this);
  }

  handleChangeSearchText(event) {
    this.setState({ searchText: event.target.value });
  }
  handleChangeBookmarkedOnly(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }
  handleChangeSelectedGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }
  addNewFilm(values) {
    this.setState((state) => ({ movies: [...state.movies, values] }));
  }
  finalList() {
    let arrMovies = this.state.movies;
    if (this.state.searchText !== '') {
      arrMovies = this.state.movies.filter(
        (movie) =>
          movie.title.includes(this.state.searchText) ||
          movie.subtitle.includes(this.state.searchText) ||
          movie.storyline.includes(this.state.searchText),
      );
    }
    if (this.state.bookmarkedOnly) {
      arrMovies = arrMovies.filter((movie) => movie.bookmarked);
    }
    if (this.state.selectedGenre.length > 0) {
      arrMovies = arrMovies.filter(
        (movie) => movie.genre === this.state.selectedGenre,
      );
    }
    return arrMovies;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.handleChangeSearchText(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event) => this.handleChangeBookmarkedOnly(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.handleChangeSelectedGenre(event)}
        />
        <MovieList movies={this.finalList(this.state)} />
        <AddMovie onClick={this.addNewFilm} />
      </div>
    );
  }
}

export default MovieLibrary;
