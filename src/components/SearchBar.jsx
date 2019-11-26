import React from "react";

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: '' };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleChange(event) {
    this.setState({ value: event.target.value });
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
        <label>
          Inclui o texto:
          <input type='text' value={searchText} onChange={onSearchTextChange} />
        </label>
        <br />
        <label>
        Mostrar somente favoritos
          <input
            name='isGoing'
            type='checkbox'
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange} />
        </label>
        <br />
        <label>
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value=''>Todos</option>
            <option value='action'>Ação</option>
            <option value='comedy'>Comédia</option>
            <option value='thriller'>Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
