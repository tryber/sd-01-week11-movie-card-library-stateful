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
      movies: props.movies
    };
    // this.changeHandlerSearchText = this.changeHandlerSearchText.bind(this)
    // this.changeHandlerBookmarkedOnly = this.changeHandlerBookmarkedOnly.bind(this)
    // this.changeHandlerSelectedGenre = this.changeHandlerSelectedGenre.bind(this)
    // this.introduceMovie = this.introduceMovie.bind(this)
    // this.listFilm = this.listFilm.bind(this)
  }

  changeHandlerSearchText = (event) => this.setState({ searchText: event.target.value });

  changeHandlerBookmarkedOnly = (event) => this.setState({ bookmarkedOnly: event.target.checked });

  changeHandlerSelectedGenre = (event) => this.setState({ selectedGenre: event.target.value });

  introduceMovie = (event) => this.setState({ movies: [...this.state.movies, event] });

  listFilm = () => {
    // let parameter = this.state.searchText;
    let list = this.state.movies;

    return list;
  };

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.changeHandlerSearchText(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event) => this.changeHandlerBookmarkedOnly(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.changeHandlerSelectedGenre(event)}
        />
        <MovieList movies={(event) => this.listFilm(event)} />
        <AddMovie movies={(event) => this.introduceMovie(event)} />
      </div>
    );
  }
}

export default MovieLibrary;
