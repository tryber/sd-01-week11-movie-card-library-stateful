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

// func(f){
//   func(this.state)
//   this.setState={
//     subtitle: '',
//     title: '',
//     imagePath: '',
//     storyline: '',
//     rating: 0,
//     genre: 'action'
//   }
// }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label>Título
            <input type="text" id="title" value={this.state.title} onChange={this.change} />
        </label>
        <label>Subtítulo
            <input type="text" id="subtitle" value={this.state.subtitle} onChange={this.change} />
        </label>
        <label>Imagem
            <input type="text" id="imagePath" value={this.state.imagePath} onChange={this.change} />
        </label>
        <label>Sinopse
            <textarea id="storyline" value={this.state.storyline} onChange={this.change} />
        </label>
        <label>Avaliação
            <input type="number" id="rating" value={this.state.rating} onChange={this.change} />
        </label>
        <label>Gênero
          <select id="genre" value={this.state.genre} onChange={this.change}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>Adicionar Filme
        <button type="button" onClick={() => funcsalvadados(onClick)}></button>
      </form>
    )
  }
}


export default AddMovie;
