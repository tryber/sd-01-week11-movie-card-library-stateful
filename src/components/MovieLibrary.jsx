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
      movies: this.props.movies
    }
  }

  sendNewData(event, id) {
    const { value } = event.target;
    this.setState({
      [id]: value
    })
  }

  sendValueCheckbox(event) {
    this.setState({
      bookmarkedOnly: event.target.checked
    })
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(e) => this.sendNewData(e, 'searchText')}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(e) => this.sendValueCheckbox(e)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(e) => this.sendNewData(e, 'selectedGenre')}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
