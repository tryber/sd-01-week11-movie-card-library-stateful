import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre, 
      onSelectedGenreChange} = this.props;

    return (
      <form>
        <div>
          <label htmlFor="searchText">Inclui o texto:</label>
          <input name="searchText" type="text" value={searchText} onChange={onSearchTextChange}></input>
        </div>
        <div>
          <label htmlFor="checkbox">Mostrar somente favoritos</label>
          <input name="checkbox" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </div>
        <div>
          <label htmlFor="selectedGenre">Filtrar por gênero</label>
          <select name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </div>
      </form>
    );
  }
}
export default SearchBar;
