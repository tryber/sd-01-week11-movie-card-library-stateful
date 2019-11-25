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

  addNewMovie = values => (
    this.setState((state) =>({ movies: [...state.movies, values] }))
  )

  moviesByBookMarkedOnly = (arr) => {
    return arr.filter(movie => movie.bookmarked);
  }

  moviesBySearchBox = (value, arr) => {
    return arr.filter(movie => (
      movie.title.includes(value) ||
      movie.subtitle.includes(value) ||
      movie.storyline.includes(value) ? true : false
    ));
  }

  moviesBySelectedGenre = (value, arr) => {
    return arr.filter(movie => movie.genre === value);
  }

  finalList = () => {
    let arrMovies = this.state.movies;
    if (this.state.searchText !== '') {
      arrMovies = this.moviesBySearchBox(this.state.searchText, arrMovies);
    }
    if (this.state.bookmarkedOnly) {
      arrMovies = this.moviesByBookMarkedOnly(arrMovies);
    }
    if (this.state.selectedGenre.length > 0) {
      arrMovies = this.moviesBySelectedGenre(this.state.selectedGenre, arrMovies);
    }
    return arrMovies;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={e => this.changeHandler(e, 'searchText')}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={e => this.changeHandler(e, 'bookmarkedOnly')}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={e => this.changeHandler(e, 'selectedGenre')}
        />
        <MovieList movies={this.finalList()} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
