import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form htmlFor="film-title">
        <input type="text" id="film-title"/>
      </form>
    )
  }
}

export default AddMovie;
