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
    this.changeHandlerText = this.changeHandlerText.bind(this);
    this.changeHandlerCheckbox = this.changeHandlerCheckbox.bind(this);
    this.changeHandlerGenre = this.changeHandlerGenre.bind(this);
    this.addFilm = this.addFilm.bind(this);
    this.addMovieInList = this.addMovieInList.bind(this);
  }

  changeHandlerText(event) {
    this.setState({ searchText: event.target.value });
  }

  changeHandlerCheckbox(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  changeHandlerGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  addFilm(event) {
    this.setState({ movies: [...this.state.movies, event] });
  }

  addMovieInList() {
    const searchMovie = this.state.searchText;
    let moviesOnTheList = this.state.movies;
    while (searchMovie !== '') {
      moviesOnTheList = moviesOnTheList.filter(
        (movies) =>
          movies.title.includes(searchMovie) ||
          movies.subtitle.includes(searchMovie) ||
          movies.storyline.includes(searchMovie)
      );
      break;
    }
    if (this.state.bookmarkedOnly) {
      moviesOnTheList = moviesOnTheList.filter((movies) => movies.bookmarked);
    }
    if (this.state.selectedGenre.length > 0) {
      moviesOnTheList = moviesOnTheList.filter((movies) => 
      movies.genre === this.state.selectedGenre);
    }
    return moviesOnTheList;
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
        <MovieList movies={ this.addMovieInList(this.state) } />        
        <AddMovie onClick={ this.addFilm } />
      </div>
    );
  }
}

export default MovieLibrary;
