import React, { Component } from 'react';

function renderInput(id, text, type, value, handleChange) {
  return (
    <label htmlFor={id}>{text}
      <input type={type} id={id} value={value} onChange={handleChange} />
    </label>
  );
}

function renderCheckbox(id, text, type, value, handleChange) {
  return (
    <label htmlFor={id}>{text}
      <input type={type} id={id} checked={value} onChange={handleChange} />
    </label>
  );
}

function renOption(key, value, text) {
  return (
    <option key={key} value={value}>{text}</option>
  );
}

class SearchBar extends Component {
  render() {
    const genreOptions = [
      { text: 'Todos', value: '' }, { text: 'Ação', value: 'action' },
      { text: 'Comédia', value: 'comedy' }, { text: 'Suspense', value: 'thriller' }];
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        {renderInput('fsearch-bar', 'Inclui o texto:', 'text', this.props.searchText, this.props.onSearchTextChange)}
        {renderCheckbox('checkbox', 'Mostrar somente favoritos:', 'checkbox', this.props.bookmarkedOnly, this.props.onBookmarkedChange)}
        <label htmlFor="select">Filtrar por gênero:
          <select id="select" value={selectedGenre} onChange={onSelectedGenreChange}>
            {genreOptions.map((option) => renOption(option.text, option.value, option.text))}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
