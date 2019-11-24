import React from 'react';

class SearchBar extends React.Component {
  inputText() {
    return (
      <label htmlFor="title">
        Inclui o texto:
        <input
          id="title"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  inputChecker() {
    return (
      <label htmlFor="favor">
        Mostrar somente favoritos:
        <input
          id="favor"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
      </label>
    );
  }

  inputSelect() {
    return (
      <label htmlFor="genre">
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
      <form>
        <fieldset>
          {this.inputText()}
          {this.inputChecker()}
          {this.inputSelect()}
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
