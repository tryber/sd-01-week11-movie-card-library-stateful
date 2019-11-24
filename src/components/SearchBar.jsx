import React, { Component } from 'react';

class SearchBar extends Component {
  renderInputText() {
    return (
      <label htmlFor="searchText">
        Inclui o texto:
        <input
          id="searchText"
          name="searchText"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  renderBookmarkedCheckbox() {
    return (
      <label htmlFor="checkbox">
        Mostrar somente favoritos
        <input name="checkbox"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
      </label>
    );
  }

  renderGenreSelector() {
    return (
      <label htmlFor="selectedGenre">
        Filtrar por gênero
        <select name="selectedGenre"
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
        {this.renderInputText()}
        {this.renderBookmarkedCheckbox()}
        {this.renderGenreSelector()}
      </form>
    );
  }
}
export default SearchBar;
