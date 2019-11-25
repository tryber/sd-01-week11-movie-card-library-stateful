import React, { Component } from 'react';

class SearchBar extends Component {
  renderInput(id, text, type, value, handleChange) {
    return (
      <label htmlFor={id}>{text}
        <input type={type} id={id} value={value} onChange={handleChange} />
      </label>
    );
  }

  renderCheckbox(id, text, type, value, handleChange) {
    return (
      <label htmlFor={id}>{text}
        <input type={type} id={id} checked={value} onChange={handleChange} />
      </label>
    );
  }

  renderOption(key, value, text) {
    return (
      <option key={key} value={value}>{text}</option>
    );
  }

  render() {
    const genreOptions = [
      { text: 'Todos', value: '' }, { text: 'Ação', value: 'action' },
      { text: 'Comédia', value: 'comedy' }, { text: 'Suspense', value: 'thriller' }];
    return (
      <form>
        {this.renderInput('fsearch-bar', 'Inclui o texto:', 'text', this.props.searchText, this.props.onSearchTextChange)}
        {this.renderCheckbox('checkbox', 'Mostrar somente favoritos:', 'checkbox', this.props.bookmarkedOnly, this.props.onBookmarkedChange)}
        <label htmlFor="select">Filtrar por gênero:
          <select id="select" value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            {genreOptions.map((option) => this.renderOption(option.text, option.value, option.text))}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
