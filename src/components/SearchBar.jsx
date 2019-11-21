import React, { Component } from "react";

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
        <label for="searchText">Inclui o texto</label>
        <input
          id="searchText"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
        />
        <label for="bookmarkedOnly">Mostrar somente favoritos</label>
        <input
          id="bookmarkedOnly"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        <label for="selectedGenre">Filtrar por gênero</label>
        <select
          id="selectedGenre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
