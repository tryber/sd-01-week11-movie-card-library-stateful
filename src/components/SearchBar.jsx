import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <fieldset>
          <label htmlFor="title">
            Inclui o texto:
            <input id="title" type="text" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label htmlFor="favorited">
          Mostrar somente favoritos:
            <input
              id="favorited"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>
          <label htmlFor="genre">
          Filtrar por gênero
            <select id="genre" onChange={onSelectedGenreChange} value={selectedGenre}>
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
