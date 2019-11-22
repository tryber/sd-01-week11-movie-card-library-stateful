import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: props.movies
    }
  }

  changeHandler = (event, name) => {
    const { value } = event.target
    this.setState(() => ({
      [name]: value
    }));
  }

  changeHandlerCheckbox = (event, name) => {
    const { value } = event.target
    this.setState(() => ({
      [name]: value
    }));
  }


  render() {
    return (
      <div>
        <h2> My Awesome Movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => changeHandlerText(event, 'searchText')}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event => changeHandlerCheckbox(event, 'checkbox'))}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event => changeHandler(event, 'selectedGenre'))}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
