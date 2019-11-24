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
      selectedGenre:'',
      movies: props.movies
    }
  }

  changeHandler = (event, name) => {
    const { value } = event.target;
    this.setState({
      [name]: value
    })
  }

  changeHandlerCheckbox(event) {
    this.setState(() => ({
      bookmarkedOnly: event.target.checked
    }))
  }
  
  render() {
    const { movies } = this.props
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
        searchText={this.state.searchText}
        onSearchTextChange={event => this.changeHandler(event, 'searchText')}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={(event) => this.changeHandlerCheckbox(event)}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={event => this.changeHandler(event, 'selectedGenre')}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie /> 
      </div>
    );
  }
}

export default MovieLibrary;
