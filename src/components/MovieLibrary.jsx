import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
    }
  }

  onSearchTextChange = event => {
    this.setState({searchText: event.target.value})
    if (event.target.value === '') {
      this.setState({ movies: this.props.movies })
    } else {
      this.setState({ movies: this.props.movies.filter((obj) => obj.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
        || obj.subtitle.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
        || obj.storyline.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))})
    }
  }

  onBookmarkedChange = event => {
    this.setState({ bookmarkedOnly: event.target.checked })
    if (event.target.checked === true) {
      this.setState({ movies: this.props.movies.filter((obj) => obj.bookmarked === event.target.checked) })
    } else {
      this.setState({ movies: this.props.movies })
    }
  }

  onSelectedGenreChange = event => {
    this.setState({selectedGenre: event.target.value})
    if (event.target.value === '') {
      this.setState({ movies: this.props.movies })
    } else {
      this.setState({ movies: this.props.movies.filter((obj) => obj.genre === event.target.value) })
    }
  }

  onClick = value => {
    this.setState((state) => ({
      movies: state.movies.concat(value)
    }))
  }

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.onSelectedGenreChange} />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    )
  }
}

export default MovieLibrary;
