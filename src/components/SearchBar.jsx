import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="filterText">
          Inclui o texto:
          <input id="filterText" type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="bk">
          Mostrar somente favoritos
          <input id="bk" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="selectedGenre">
          Filtrar por gênero
          <select id="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
            {[['Todos', ''], ['Ação', 'action'], ['Comédia', 'comedy'], ['Suspense', 'thriller']]
              .map((genre) => <option key={genre[1]} value={genre[1]}>{genre[0]}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
