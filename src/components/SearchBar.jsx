import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form className="forms">
        <label htmlFor="search-bar">Inclui o texto</label>
        <input type="text" name="search-bar" id="search-bar" value={this.props.searchText} onChange={this.props.onSearchTextChange} />
      </form>
    )
  }
}

export default SearchBar;
