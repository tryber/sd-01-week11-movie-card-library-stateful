import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="film-title">
          Título
        <input type="text" id="film-title" />
        </label>
      </form>
    )
  }
}

export default AddMovie;
