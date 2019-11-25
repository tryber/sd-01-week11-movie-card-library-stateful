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
    this.changeHandler = this.changeHandler.bind(this);
    this.changeHandlerCheckbox = this.changeHandlerCheckbox.bind(this);
    this.introduceMovie = this.introduceMovie.bind(this);
    this.listFilm = this.listFilm.bind(this);
  }

  changeHandler(event, name) {
    const { value } = event.target;
    this.setState(
      { [name]: value },
    );
  }

  changeHandlerCheckbox(event) {
    this.setState(
      { bookmarkedOnly: event.target.checked },
    );
  }

  introduceMovie(value) {
    this.setState({ movies: [...this.state.movies, value] });
  }

  listFilm() {
    let list = this.state.movies;
    if (this.state.searchText !== '') {
      list = list.filter(
        (filme) =>
          filme.title.includes(this.state.searchText) ||
          filme.subtitle.includes(this.state.searchText) ||
          filme.storyline.includes(this.state.searchText),
      );
    }
    if (this.state.bookmarkedOnly) {
      list = list.filter((filme) => filme.bookmarked);
    }
    if (this.state.selectedGenre.length > 0) {
      list = list.filter((filme) => filme.genre === this.state.selectedGenre);
    }
    return list;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.changeHandler(event, 'searchText')}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event) => this.changeHandlerCheckbox(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.changeHandler(event, 'selectedGenre')}
        />
        <MovieList movies={this.listFilm(this.state)} />
        <AddMovie onClick={this.introduceMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
