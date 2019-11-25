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
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange =this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value })
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked })
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value })
  }

  onClick(value) {
    this.setState((state) => ({
      movies: state.movies.concat(value)
    }))
  }

  filterList = () => {
    const array = this.state.movies;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly) {
      return array.filter((obj) => obj.bookmarked === bookmarkedOnly)
    }
    if (searchText !== '') {
      return array.filter((obj) => obj.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        || obj.subtitle.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        || obj.storyline.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    }
    if (selectedGenre !== '') {
      return array.filter((obj) => obj.genre === selectedGenre)
    }
    return array
  }

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.onSelectedGenreChange} />
        <MovieList movies={this.filterList(this.state)} />
        <AddMovie onClick={this.onClick} />
      </div>
    )
  }
}

export default MovieLibrary;
