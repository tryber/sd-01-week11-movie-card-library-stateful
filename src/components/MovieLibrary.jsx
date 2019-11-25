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

    this.changeSearchText = this.changeSearchText.bind(this);
    this.changeBookmarked = this.changeBookmarked.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
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

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={searchText} onSearchTextChange={this.changeSearchText} bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={this.changeBookmarked} selectedGenre={selectedGenre} onSelectedGenreChange={this.changeGenre} />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
