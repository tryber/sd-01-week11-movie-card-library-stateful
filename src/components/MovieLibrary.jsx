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
    this.finalList = this.finalList.bind(this);
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

  finalList() {
    let arrMovies = this.state.movies;
    if (this.state.searchText !== '') {
      arrMovies = this.state.movies.filter((movie) => (
        movie.title.includes(this.state.searchText)
        || movie.subtitle.includes(this.state.searchText)
        || movie.storyline.includes(this.state.searchText)
      ));
    }
    if (this.state.bookmarkedOnly) {
      arrMovies = this.state.movies.filter((movie) => movie.bookmarked);
    }
    if (this.state.selectedGenre.length > 0) {
      arrMovies = this.state.movies
        .filter((movie) => movie.genre === this.state.genre);
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
          onSelectedGenreChange={(e) => this.changeHandlerGenre(e)}
        />
        <MovieList movies={this.finalList(this.state)} />
        <AddMovie onClick={this.addNewFilm} />
      </div>
    );
  }
}

export default MovieLibrary;
