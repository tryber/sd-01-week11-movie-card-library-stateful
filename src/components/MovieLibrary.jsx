import React, { Component } from "react";

import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      searchText: "",
      onSearchTextChange: "",
      bookmarkedOnly: false,
      onBookmarkedChange: "",
      selectedGenre: "",
      movies: props.movies,
      onSelectedGenreChange: ""
    };
  }
  handleChangeOnSearchText(event) {
    this.setState({ onSearchTextChange: event.target.value });
  }
  handleChangeSearchText(event) {
    this.setState({ searchText: event.target.value });
  }
  handleChangeBookmarkedOnly(event) {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={event => this.handleChangeSearchText(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          bookmarkedOnly={event => this.handleChangeBookmarkedOnly(event)}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
