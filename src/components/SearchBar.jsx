import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="include-the-text">
          Inclui o texto:
          <input id="include-the-text" type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="include-the-favorities">
          Mostrar somente favoritos
          <input id="include-the-favorities" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="include-genere">
          Filtrar por gênero
          <select id="include-genere" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
