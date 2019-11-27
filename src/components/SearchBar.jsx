import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  createInput() {
    return (
      <label htmlFor="title" className="title">
        Inclui o texto:
        <input
          id="title"
          type="text"
          placeholder="O que está procurando ?"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  createInputChecked() {
    return (
      <label htmlFor="favorited" className="favorited">
        <input
          id="favorited"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
        Mostrar somente favoritos
      </label>
    );
  }

  createSelect() {
    return (
      <label htmlFor="genre" className="genre">
        Filtrar por gênero
        <select
          id="genre"
          onChange={this.props.onSelectedGenreChange}
          value={this.props.selectedGenre}
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
      <form className="search-form">
        <fieldset className="search">
          {this.createInput()}
          {this.createInputChecked()}
          {this.createSelect()}
        </fieldset>
      </form>
    );
  }
}


export default SearchBar;
