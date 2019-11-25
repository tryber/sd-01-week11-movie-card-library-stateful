import React, { Component } from 'react';

class SearchBar extends Component {
  addTopForm() {
    return (
      <label htmlFor="include-the-text">
        Inclui o texto
        <input
          id="include-the-text"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  showFavorities() {
    return (
      <label htmlFor="include-the-favorities">
        Mostrar somente favoritos
        <input
          id="include-the-favorities"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
      </label>
    );
  }

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        {this.addTopForm()}
        {this.showFavorities()}
        <label htmlFor="include-genre">
          Filtrar por gênero
          <select id="include-genre" value={selectedGenre} onChange={onSelectedGenreChange}>
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
