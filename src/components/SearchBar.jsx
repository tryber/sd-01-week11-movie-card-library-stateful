import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form>
        <label htmlFor="incluitexto">
          Inclui o texto
          <input
            type="text"
            name="incluitexto"
            id="incluitexto"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <label htmlFor="checkbox">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <label htmlFor="id_select">
          Filtrar por gênero
          <select
            name="select"
            id="id_select"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
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
