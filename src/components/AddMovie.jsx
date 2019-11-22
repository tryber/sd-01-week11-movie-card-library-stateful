import React from 'react';

class AddMovie extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }
  
  onTextChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  // onTitleChange = event => {
  //   const {value} = event.target
  //   this.setState({title: value})
  // }

  render() {
    const genreOptions = [
      { value: 'action', text: 'Ação' },
      { value: 'comedy', text: 'Comédia' },
      { value: 'thriller', text: 'Suspense' },
    ];
    return (
      <form>
        <label htmlFor="film-title">
          Título
        <input type="text" id="film-title" name="title" value={this.state.title} onChange={this.onTextChange}/>
        </label>
        <label htmlFor="film-subtitle">
          Subtítulo
        <input type="text" id="film-subtitle" name="subtitle" value={this.state.subtitle} onChange={this.onTextChange}/>
        </label>
        <label htmlFor="film-img">
          Imagem
        <input type="text" id="film-img" name="imagePath" value={this.state.imagePath} onChange={this.onTextChange}/>
        </label>
        <label htmlFor="film-storyline">
          Sinopse
        <textarea id="film-storyline" name="storyline" value={this.state.storyline} onChange={this.onTextChange}/>
        </label>
        <label htmlFor="film-avalation">
        Avaliação
        <input type="number" id="film-avalation" name="rating" value={this.state.rating} onChange={this.onTextChange}/>
        </label>
        <label htmlFor="film-genre">
        Gênero
        <select name="genre" value={this.state.genre} onChange={this.onTextChange}>
        {genreOptions.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)}
        </select>
        </label>
      </form>
    )
  }
}

export default AddMovie;
