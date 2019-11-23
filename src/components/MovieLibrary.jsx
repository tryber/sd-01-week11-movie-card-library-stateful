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

    this.addNewFilm = this.addNewFilm.bind(this);
    this.changeHandlerSearch = this.changeHandlerSearch.bind(this);
    this.changeHandlerMarked = this.changeHandlerMarked.bind(this);
    this.changeHandlerGenre = this.changeHandlerGenre.bind(this);
  }

  addNewFilm(values) {
    this.setState((state) => ({ movies: [...state.movies, values] }));
  }

  changeHandlerSearch(event) {
    this.setState({ searchText: event.target.value });
  }

  changeHandlerMarked(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  changeHandlerGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    function filterMoviesByBookMarkedOnly(arr) {
      return arr.filter((movie) => movie.bookmarked);
    }

    function filterMoviesBySearchBox(value, arr) {
      return arr.filter((movie) => (
        movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value)
      ));
    }

    function filterMoviesBySelectedGenre(value, arr) {
      return arr.filter((movie) => movie.genre === value);
    }

    function finalList() {
      let arrMovies = this.state.movies;
      if (this.state.searchText !== '') {
        arrMovies = filterMoviesBySearchBox(this.state.searchText, arrMovies);
      }
      if (this.state.bookmarkedOnly) {
        arrMovies = filterMoviesByBookMarkedOnly(arrMovies);
      }
      if (this.state.selectedGenre.length > 0) {
        arrMovies = filterMoviesBySelectedGenre(this.state.selectedGenre, arrMovies);
      }
      return arrMovies;
    }

    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(e) => this.changeHandlerSearch(e)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(e) => this.changeHandlerMarked(e)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(e) => this.changeHandlerGenre(e)}
        />
        <MovieList movies={finalList()} />
        <AddMovie onClick={this.addNewFilm} />
      </div>
    );
  }
}

export default MovieLibrary;
