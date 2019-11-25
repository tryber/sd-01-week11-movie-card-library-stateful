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

    this.filterFilms = this.filterFilms.bind(this);
    this.sendNewData = this.sendNewData.bind(this);
    this.sendValueCheckbox = this.sendValueCheckbox.bind(this);
    this.addFilmToList = this.addFilmToList.bind(this);
  }

  filterFilms() {
    let films = this.state.movies;
      if (this.state.searchText !== '') {
        films = films.filter(film =>
        film.title.includes(this.state.searchText) ||
        film.subtitle.includes(this.state.searchText) ||
        film.storyline.includes(this.state.searchText),
      );
    }

    if (this.state.bookmarkedOnly) {
      films = films.filter(film => film.bookmarked);
    }

    if (this.state.selectedGenre.length > 0) {
      films = films.filter(film => film.genre === this.state.selectedGenre)
    }

    return films;
  }

  sendNewData(event, id) {
    const { value } = event.target;
    this.setState({ [id]: value });
  }

  sendValueCheckbox(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  addFilmToList(movie) {
    this.setState({ movies: [...this.state.movies, movie] });
  }


  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(e) => this.sendNewData(e, 'searchText')}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(e) => this.sendValueCheckbox(e)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(e) => this.sendNewData(e, 'selectedGenre')}
        />
        <MovieList movies={this.filterFilms()} />
        <AddMovie onClick={this.addFilmToList} />
      </div>
    );
  }
}

export default MovieLibrary;
