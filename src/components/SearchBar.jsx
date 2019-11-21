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
        <fieldset>
          <label>
            Inclui o texto:
            <input type="text" id={searchText} name="searchText" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label>
            Mostrar somente favoritos:
            <input type="checkbox" checked={bookmarkedOnly} name="bookmarkedOnly" onChange={onBookmarkedChange} />
          </label>
          <label>
            Filtrar por gênero
            <select onChange={onSelectedGenreChange} value={selectedGenre} name="selectedGenre">
              <option value=''>Todos</option>
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
