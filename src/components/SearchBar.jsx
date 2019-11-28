import React from "react";

class SearchBar extends React.Component {
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  createInputSearch(value, func) {
    return (
      <label>
        Inclui o texto:
        <input type="text" value={value} onChange={func} />
      </label>
    );
  }
  createSelectBook(value, func) {
    return (
      <label>
        Mostrar somente favoritos
        <input name="isGoing" type="checkbox" checked={value} onChange={func} />
      </label>
    );
  }
  createSelectedGenre(value, func) {
    return (
      <label>
        Filtrar por gênero
        <select value={value} onChange={func}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

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
      <form onSubmit={this.handleSubmit}>
        {this.createInputSearch(searchText, onSearchTextChange)}
        <br />
        {this.createSelectBook(bookmarkedOnly, onBookmarkedChange)}
        <br />
        {this.createSelectedGenre(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

export default SearchBar;
