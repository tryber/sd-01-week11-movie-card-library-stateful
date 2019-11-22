import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form className="forms">
        <label htmlFor="search-bar">
        <input type="text" name="search-bar" id="search-bar" value={this.props.searchText} onChange={this.props.onSearchTextChange} />
          Inclui o texto
          </label>
        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox"/>
          Mostrar somente favoritos
          </label>
        
      </form>
    )
  }
}

export default SearchBar;
