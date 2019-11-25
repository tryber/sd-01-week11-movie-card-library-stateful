import React, { Component } from 'react';
import movies from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.movies = movies;

    this.onClick = this.onClick.bind(this);
  }

  onClick(state) {
    const { title, subtitle, imagePath, storyline, rating, genre } = state;
    this.setState({
      [subtitle]: '',
      [title]: '',
      [imagePath]: '',
      [storyline]: '',
      [rating]: 0,
      [genre]: 'action',
    });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
