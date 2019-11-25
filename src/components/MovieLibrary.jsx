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
      movies: this.props.movies,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.finalList = this.finalList.bind(this);
  }

  changeHandler(event, name) {
    if (name === 'bookmarkedOnly') {
      const { checked } = event.target;
      this.setState({ [name]: checked });
    } else {
      const { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  addNewMovie(values) {
    this.setState((state) => ({ movies: [...state.movies, values] }));
  }

  movieList() {
    let movieArray = this.state.movies;
    if (this.state.searchText !== '') {
      movieArray = this.state.movies.filter((movie) => (
        movie.title.includes(this.state.searchText)
        || movie.subtitle.includes(this.state.searchText)
        || movie.storyline.includes(this.state.searchText)
      ));
    }
    if (this.state.bookmarkedOnly) {
      movieArray = movieArray.filter((movie) => movie.bookmarked);
    }
    if (this.state.selectedGenre.length > 0) {
      movieArray = movieArray
        .filter((movie) => movie.genre === this.state.selectedGenre);
    }
    return movieArray;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(e) => this.changeHandler(e, 'searchText')}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(e) => this.changeHandler(e, 'bookmarkedOnly')}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(e) => this.changeHandler(e, 'selectedGenre')}
        />
        <MovieList movies={this.movieList()} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
