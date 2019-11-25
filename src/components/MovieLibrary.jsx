import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };

    this.movieList = this.movieList.bind(this);
    this.changeSearchText = this.changeSearchText.bind(this);
    this.changeBookmarked = this.changeBookmarked.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  changeSearchText(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  changeBookmarked(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  changeGenre(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  movieList() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    let movieList = movies;
    if (bookmarkedOnly) {
      movieList = movieList.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (selectedGenre) {
      movieList = movieList.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText) {
      movieList = movieList.filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)));
    }
    return movieList;
  }

  addMovie(actualState) {
    const { subtitle, title, imagePath, storyline, rating, genre } = actualState;
    this.setState((state) => ({
      movies: [
        ...state.movies,
        { title, subtitle, imagePath, storyline, rating, genre },
      ],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.changeSearchText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.changeBookmarked}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.changeGenre}
        />
        <MovieList movies={this.movieList()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
