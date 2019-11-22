import React from 'react';

class AddMovie extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: ''
    }
  }
  
  render() {
    return (
      <form>
        <label htmlFor="film-title">
          Título
        <input type="text" id="film-title" value={this.state.title}/>
        </label>
      </form>
    )
  }
}

export default AddMovie;
