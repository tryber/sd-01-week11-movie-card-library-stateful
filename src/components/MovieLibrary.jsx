import React, { Component } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: props.movies
    };
  }

  changeHandler = event => {
    const { value, id } = event.target;
    this.setState({
      [id]: value
    });
  };

  changeHandlerForCheckbox = event => {
    const { checked, id } = event.target;
    this.setState({
      [id]: checked
    });
  };

  pushingNewMovie = newMovie => {
    const moviesState = this.state.movies;
    moviesState.push(newMovie);
    this.setState({
      movies: moviesState
    });
  };

  render() {
    return (
      <main>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.changeHandler}
          onBookmarkedChange={this.changeHandlerForCheckbox}
          onSelectedGenreChange={this.changeHandler}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.pushingNewMovie} />
      </main>
    );
  }
}

export default MovieLibrary;
