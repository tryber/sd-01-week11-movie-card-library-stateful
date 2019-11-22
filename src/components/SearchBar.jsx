import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form clasName="forms">
        <label for="search-bar">Inclui o texto</label>
        <input type="text" name="search-bar" id="search-bar"/>
      </form>
    )
  }
}

export default SearchBar;
