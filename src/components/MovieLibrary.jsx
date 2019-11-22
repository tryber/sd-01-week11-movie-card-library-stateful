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
  }

  changeHandler = (event, name) => {
    if (name === 'bookmarkedOnly') {
      const { checked } = event.target;
      this.setState({ [name]: checked });
    } else {
      const { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  addNewMovie = values => {
    this.setState((state) => ({ movies: [...state.movies, values] }))
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
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
