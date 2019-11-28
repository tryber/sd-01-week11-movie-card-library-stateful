import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.createInputSearch = this.createInputSearch.bind(this);
    this.createSelectBook = this.createSelectBook.bind(this);
    this.createSelectedGenre = this.createSelectedGenre.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  createInputSearch(value, func) {
    return (
      <label htmlFor="Inp">
        Inclui o texto:
        <input id="Inp" type="text" value={value} onChange={func} />
      </label>
    );
  }
  createSelectBook(value, func) {
    return (
      <label htmlFor="Sel">
        Mostrar somente favoritos
        <input id="Sel" name="isGoing" type="checkbox" checked={value} onChange={func} />
      </label>
    );
  }
  createSelectedGenre(value, func) {
    return (
      <label htmlFor="genr">
        Filtrar por gênero
        <select id="genr" value={value} onChange={func}>
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
      onSelectedGenreChange,
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
