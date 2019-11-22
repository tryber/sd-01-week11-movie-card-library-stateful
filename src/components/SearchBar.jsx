import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    
  }
  
  render() {
    return (
      <form clasName="forms">
        <label for="search-bar">Inclui o texto</label>
        <input type="text" name="search-bar" id="search-bar" value={this.props.searchText}/>
      </form>
    )
  }
}

export default SearchBar;
