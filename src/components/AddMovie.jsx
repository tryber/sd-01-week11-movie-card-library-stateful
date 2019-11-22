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
    addMovie = (event) => {
      const { name, value } = event.target
      console.log(`${name}: ${value}`)
      this.setState((state) => ({ [name]: value }))
    }
pegarValores = () => (this.setState({
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
}))
  btn = (event) => pegarValores(this.state);
  

  render() {
    const valorAtual = this.state;
    return (
      <div>
      <label htmlFor="titulo">Título
        <input type="text" name="titulo" id="titulo" value={this.state.title} onChange={this.addMovie}/>
      </label>
      <label htmlFor="subtitulo">Subtítulo
        <input type="text" name="subtitulo" id="subtitulo" value={this.state.subtitle} onChange={this.addMovie}/>
      </label>
      <label htmlFor="imagem">Imagem
      <input type="text" name="imagem" id="imagem" value={this.state.imagePath} onChange={this.addMovie}/>
      </label>
      <label htmlFor="sinopse">Sinopse
      <textarea name="sinopse" id="sinopse" cols="30" rows="10" value={this.state.storyline} onChange={this.addMovie}></textarea>
      </label>
      <label htmlFor="avalia">Avaliação
      <input type="number" name="avalia" id="avalia" value={this.state.rating} onChange={this.addMovie}/>
      </label>
      <label htmlFor="selectgenero">Gênero
      <select name="selectgenero" id="selectgenero"value={this.state.genre} onChange={this.addMovie}>
      <option value="action">Ação</option>
      <option value="comedy">Comédia</option>
      <option value="thriller">Suspense</option>
      </select>
      </label>
      <button type="submit" onClick={this.btn(valorAtual)}>Adicionar filme</button>
      </div>
    )
  }
}

export default AddMovie;
