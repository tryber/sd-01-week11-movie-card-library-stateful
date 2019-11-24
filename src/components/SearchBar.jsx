import React, { Component } from 'react';

class SearchBar extends Component {

  textInclusion() {
    return (
      <label htmlFor="text-inclusion">Inclui o texto
        <input
          id="text-inclusion"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  showFavorites() {
    return (
      <label htmlFor="show-favorites">Mostrar somente favoritos
        <input
          id="show-favorites"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
      </label>
    );
  }

  genreFilter() {
    return (
      <label htmlFor="genre-filter">Filtrar por gênero
        <select
          id="genre-filter"
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <fieldset>
          {this.textInclusion()}
          {this.showFavorites()}
          {this.genreFilter()}
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
