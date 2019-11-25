import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const genreOptions = [
      { text: 'Todos', value: '' }, { text: 'Ação', value: 'action' },
      { text: 'Comédia', value: 'comedy' }, { text: 'Suspense', value: 'thriller' }];
    return (
      <form>
        <label htmlFor="search-bar">Inclui o texto:
        <input type="text" name="search-bar" id="search-bar"
            value={this.props.searchText} onChange={this.props.onSearchTextChange} />
        </label>
        <label htmlFor="checkbox">Mostrar somente favoritos:
          <input type="checkbox" name="checkbox" id="checkbox"
            checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} />
        </label>
        <label htmlFor="select">Filtrar por gênero:
          <select id="select" value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}>
            {genreOptions.map((option) =>
              <option key={option.text} value={option.value}>{option.text}</option>)}
          </select>
        </label>

      </form>
    );
  }
}

export default SearchBar;
