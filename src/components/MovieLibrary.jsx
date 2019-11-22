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
    this.changeHandler = this.changeHandler.bind(this)
  }

  addNewFilm(values) {
    this.setState((state) => ({
      movies: [...state.movies, values]
    }))
  }


  changeHandler(event, name) {
    if (name === 'bookmarkedOnly') {
      const { checked } = event.target
      this.setState(() => ({
        [name]: checked
      }))
    } else {
      const { value } = event.target
      this.setState(() => ({
        [name]: value
      }))
    }
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
          onSearchTextChange={(e) => this.changeHandler(e, 'searchText')}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(e) => this.changeHandler(e, 'bookmarkedOnly')}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(e) => this.changeHandler(e, 'selectedGenre')} />
        <MovieList movies={this.finalList()} />
        <AddMovie onClick={this.addNewFilm} />
      </div>
    );
  }
}

export default MovieLibrary;
