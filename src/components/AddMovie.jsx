import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }
  change = (event) => {
    const { value, id } = event.target;
    this.setState({
      [id]: value
    })
  }

  render() {
    const { onClick } = this.props.movies;
    return (
      <form>
        <label>Título
            <input type="text" id="title" value={this.state.title} onChange={this.setState} />
        </label>
        <label>Subtitulo
            <input type="text" id="subtitle" value={this.state.subtitle} onChange={this.setState} />
        </label>
        <label>Imagem
            <input type="text" id="imagePath" value={this.state.imagePath} onChange={this.setState} />
        </label>
        <label>Sinopse
            <textarea id="storyline" value={this.state.imagePath} onChange={this.setState} />
        </label>
        <label>Avaliação
            <input type="number" id="rating" value={this.state.rating} onChange={this.setState} />
        </label>
      </form>
    )
  }
}

export default AddMovie;
