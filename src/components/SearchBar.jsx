import React, { Component } from 'react';

class SearchBar extends Component {
  renderInputText() {
    return (
      <div>
        <label>
          Inclui o texto:
        <input
            name="searchText"
            type="text"
            value={ this.props.searchText }
            onChange={ this.props.onSearchTextChange }
          />
        </label>
      </div>
    );
  }

  renderBookmarkedCheckbox() {
    return (
      <div>
        <label>
          Mostrar somente favoritos
        <input name="checkbox"
            type="checkbox"
            checked={ this.props.bookmarkedOnly }
            onChange={ this.props.onBookmarkedChange }
          />
        </label>
      </div>
    );
  }

  renderGenreSelector() {
    return (
      <div>
        <label>
          Filtrar por gênero
        <select name="selectedGenre"
            value={ this.props.selectedGenre }
            onChange={ this.props.onSelectedGenreChange }>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
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
