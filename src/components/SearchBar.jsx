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
  createInputSearch(func) {
    return (
      <label htmlFor="Inp">
        Inclui o texto:
        <input
          id="Inp"
          type="text"
          value={this.props.searchText}
          onChange={func}
        />
      </label>
    );
  }
  createSelectBook(func) {
    return (
      <label htmlFor="Sel">
        Mostrar somente favoritos
        <input
          id="Sel"
          name="isGoing"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={func}
        />
      </label>
    );
  }
  createSelectedGenre(func) {
    return (
      <label htmlFor="genr">
        Filtrar por gênero
        <select id="genr" value={this.props.selectedGenre} onChange={func}>
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
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {this.createInputSearch(onSearchTextChange)}
        <br />
        {this.createSelectBook(onBookmarkedChange)}
        <br />
        {this.createSelectedGenre(onSelectedGenreChange)}
      </form>
    );
  }
}

export default SearchBar;
