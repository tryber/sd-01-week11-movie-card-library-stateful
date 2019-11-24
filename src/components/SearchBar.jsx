import React, { Component } from 'react';

class SearchBar extends Component {
  renderInputText() {
    return (
      <div>
        <label htmlFor="searchText">Inclui o texto:</label>
        <input name="searchText" type="text"
          value={this.props.searchText} onChange={this.props.onSearchTextChange} />
      </div>
    );
  }

  renderBookmarkedCheckbox() {
    return (
      <div>
        <label htmlFor="checkbox">Mostrar somente favoritos</label>
        <input name="checkbox" type="checkbox"
          checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} />
      </div>
    );
  }

  renderGenreSelector() {
    return (
      <div>
        <label htmlFor="selectedGenre">Filtrar por gênero</label>
        <select name="selectedGenre"
          value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
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
