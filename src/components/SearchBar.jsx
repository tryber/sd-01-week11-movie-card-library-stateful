import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form>
        <div>
          <label>Inclui o texto:</label>
          <input type="text" value={searchText} onChange={onSearchTextChange}></input>
        </div>

        <div>
          <label>Mostrar somente favoritos</label>
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </div>

        <div>
          <label>Filtrar por gênero</label>
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </div>
      </form>
    );
  };
}
export default SearchBar;
