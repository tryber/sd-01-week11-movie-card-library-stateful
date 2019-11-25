import React, { Component } from 'react';

class SearchBar extends Component {

  addTopForm(id, label, type, value, onChange) {
    return (
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
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
    const {
      searchText, onSearchTextChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form className="filter-the-movie">
        {this.addTopForm('include-the-text', 'Inclui o texto:',
          'text', searchText, onSearchTextChange)}
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
