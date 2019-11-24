import React from 'react';

function SearchBar(props) {
  const {
    searchText, onSearchTextChange,
    bookmarkedOnly, onBookmarkedChange,
    selectedGenre, onSelectedGenreChange,
  } = props;

  const createInput = () => {
    return (
      <label htmlFor="title">
      Inclui o texto:
        <input id="title" type="text" value={searchText} onChange={onSearchTextChange} />
      </label>
    );
  };

  const createInputChecked = () => {
    return (
      <label htmlFor="favorited">
      Mostrar somente favoritos:
        <input
          id="favorited"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  };

  const createSelect = () => {
    return (
      <label htmlFor="genre">
      Filtrar por gênero
        <select id="genre" onChange={onSelectedGenreChange} value={selectedGenre}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  };

  return (
    <form>
      <fieldset>
        {createInput()}
        {createInputChecked()}
        {createSelect()}
      </fieldset>
    </form>
  );
}


export default SearchBar;
