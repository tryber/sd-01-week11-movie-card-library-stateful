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
      genre: 'action',
    };
  }

  addMovie(onClick) {
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;

    return (
      <form>
        <label>
          Título:
          <input type="text" value={this.state.title} onChange={this.changeState} />
        </label>
        <label>
          Subtítulo:
          <input type="text" value={this.state.subtitle} onChange={this.changeState} />
        </label>
        <label>
          Imagem:
          <input type="text" value={this.state.imagePath} onChange={this.changeState} />
        </label>
        <label>
          Sinopse:
          <textarea value={this.state.storyline} onChange={this.changeState} />
        </label>
        <label>
          Avaliação:
          <input type="number" value={this.state.rating} onChange={this.changeState} />
        </label>
        <label>
          Gênero:
          <select value={this.state.genre} onChange={this.changeState}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button type="button" onClick={this.addMovie(onClick)}>Adicionar Filme</button>
        </label>
      </form>
    );
  }
}

export default AddMovie;
