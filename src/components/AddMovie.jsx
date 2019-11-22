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
    };
  }

  changeHandler = event => {
    const { name, value } = event.target;
    //console.log(`${name}: ${value}`);
    this.setState(state => ({ [name]: value }));
  };

  resetarValores = (onClick) =>{
  onClick (this.state)

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    })};


  render() {
    const {onClick} = this.props;
    return (
      <div>
        <label htmlFor="titulo">
          Título
          <input
            type="text"
            name="titulo"
            id="titulo"
            value={this.state.title}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="subtitulo">
          Subtítulo
          <input
            type="text"
            name="subtitulo"
            id="subtitulo"
            value={this.state.subtitle}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input
            type="text"
            name="imagem"
            id="imagem"
            value={this.state.imagePath}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="sinopse">
          Sinopse
          <textarea
            name="sinopse"
            id="sinopse"
            cols="30"
            rows="10"
            value={this.state.storyline}
            onChange={this.changeHandler}
          ></textarea>
        </label>
        <label htmlFor="avalia">
          Avaliação
          <input
            type="number"
            name="avalia"
            id="avalia"
            value={this.state.rating}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="selectgenero">
          Gênero
          <select
            name="selectgenero"
            id="selectgenero"
            value={this.state.genre}
            onChange={this.changeHandler}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={() => this.resetarValores(onClick)}>
          Adicionar filme
        </button>
      </div>
    );
  }
}

export default AddMovie;
