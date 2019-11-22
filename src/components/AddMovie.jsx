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

  addMovie = onClick => {
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

  changeHandler = (event, name) => {
    let { value } = event.target
    if(name === 'rating') value = Number(value);
    this.setState({ [name]: value })
  }

  render() {
    const { onClick } = this.props;

    return (
      <form>
        <label>
          Título
          <input type="text" value={this.state.title} onChange={(e) => this.changeHandler(e,'title')} />
        </label>
        <label>
          Subtítulo
          <input type="text" value={this.state.subtitle} onChange={(e) => this.changeHandler(e,'subtitle')} />
        </label>
        <label>
          Imagem
          <input type="text" value={this.state.imagePath} onChange={(e) => this.changeHandler(e,'imagePath')} />
        </label>
        <label>
          Sinopse
          <textarea value={this.state.storyline} onChange={(e) => this.changeHandler(e,'storyline')} />
        </label>
        <label>
          Avaliação
          <input type="number" value={this.state.rating} onChange={(e) => this.changeHandler(e,'rating')} />
        </label>
        <label>
          Gênero:
          <select value={this.state.genre} onChange={(e) => this.changeHandler(e,'genre')}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button type="button" onClick={() => this.addMovie(onClick)}>Adicionar filme</button>
        </label>
      </form>
    );
  }
}

export default AddMovie;
