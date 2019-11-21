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
    }
  }

  addNewFilm = (values) => {
    const { movies } = this.state;
    movies.push(values)
    this.setState({movies});
  }


  changeHandler = event => {
    const { name, value } = event.target
    console.log(name,value)
    console.log(event.target)
    this.setState(() => ({
      [name]: value
    }))
  }

  changeHandlerChecked = event => {
    const { name, checked } = event.target
    this.setState(() => ({
      [name]: checked
    }))
  }

  
  render() {

    const filterMoviesBySearchBox = (value,arr) => arr.filter((movie) => (movie.title.includes(value) || movie.subtitle.includes(value) || movie.storyline.includes(value))?true:false)

    const filterMoviesByBookMarkedOnly = (arr) => 
      arr.filter((movie) => movie.bookmarked);

    const filterMoviesBySelectedGenre = (value,arr) => {
      arr.filter((movie) => movie.genre===value );
    }
    
    const finalList = () => {
      let arrMovies=this.state.movies;
      if(this.state.searchText!==''){
        arrMovies = filterMoviesBySearchBox(this.state.searchText,arrMovies);
      }
      if(this.state.bookmarkedOnly){
        arrMovies = filterMoviesByBookMarkedOnly(arrMovies);
      }
      if(this.state.selectedGenre.length>0){
        arrMovies = filterMoviesBySelectedGenre(this.state.selectedGenre,arrMovies);
      }
      return arrMovies;
    }

    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar 
        searchText={this.state.searchText} 
        onSearchTextChange={this.changeHandler} 
        bookmarkedOnly={this.state.bookmarkedOnly} 
        onBookmarkedChange={this.changeHandlerChecked} 
        selectedGenre={this.state.selectedGenre} 
        onSelectedGenreChange={this.changeHandler}/>
        <MovieList movies={finalList()} />
        <AddMovie onClick={this.addNewFilm}/>
      </div>
    );
  }
}

export default MovieLibrary;
