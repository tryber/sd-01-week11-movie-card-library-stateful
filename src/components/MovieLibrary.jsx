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
    }

    this.addNewFilm = this.addNewFilm.bind(this)
    this.changeHandlerSearch = this.changeHandlerSearch.bind(this)
    this.changeHandlerMarked = this.changeHandlerMarked.bind(this)
    this.changeHandlerGenre = this.changeHandlerGenre.bind(this)
  }

  addNewFilm(values) {
    this.setState((state) => ({
      movies: [...state.movies, values]
    }))
  }

  changeHandlerSearch(event) {
    this.setState(() => ({
      searchText: event.target.value
    }))
  }

  changeHandlerMarked(event) {
    this.setState(() => ({
      bookmarkedOnly: event.target.checked
    }))
  }

  changeHandlerGenre(event) {
    this.setState(() => ({
      selectedGenre: event.target.value
    }))
  }

  filterMoviesBySearchBox = (value, arr) => arr.filter((movie) =>
    (movie.title.includes(value) || movie.subtitle.includes(value) || movie.storyline.includes(value)) ? true : false)

  filterMoviesByBookMarkedOnly = (arr) =>
    arr.filter((movie) => movie.bookmarked);

  filterMoviesBySelectedGenre = (value, arr) =>
    arr.filter((movie) => movie.genre === value);

  finalList = () => {
    let arrMovies = this.state.movies;
    if (this.state.searchText !== '') {
      arrMovies = this.filterMoviesBySearchBox(this.state.searchText, arrMovies);
    }
    if (this.state.bookmarkedOnly) {
      arrMovies = this.filterMoviesByBookMarkedOnly(arrMovies);
    }
    if (this.state.selectedGenre.length > 0) {
      arrMovies = this.filterMoviesBySelectedGenre(this.state.selectedGenre, arrMovies);
    }
    return arrMovies;
  }
  render() {
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(e) => this.changeHandlerSearch(e)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(e) => this.changeHandlerMarked(e)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(e) => this.changeHandlerGenre(e)} />
        <MovieList movies={this.finalList()} />
        <AddMovie onClick={this.addNewFilm} />
      </div>
    );
  }
}

export default MovieLibrary;
