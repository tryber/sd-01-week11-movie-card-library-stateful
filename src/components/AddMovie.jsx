import React from 'react';

class AddMovie extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: ''
    }
  }
  
  onTitleChange = event => {
    const value = event.target.value
    this.setState({title: value})
  }
  

  render() {
    return (
      <form>
        <label htmlFor="film-title">
          Título
        <input type="text" id="film-title" value={this.state.title} onChange={this.onTitleChange}/>
        </label>
      </form>
    )
  }
}

export default AddMovie;
