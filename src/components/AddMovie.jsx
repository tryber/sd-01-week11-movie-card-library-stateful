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

  change = (event, id) => {
    const { value } = event.target;
    this.setState({
      [id]: value
    })
  }

  changeNumber = (event, id) => {
    const { value } = event.target;
    this.setState({
      [id]: Number(value)
    })
  }

  newState(onClick) {
    onClick(this.state)
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label>Título
            <input type="text" value={this.state.title} onChange={(e) => this.change(e, 'title')} />
        </label>
        <label>Subtítulo
            <input type="text" value={this.state.subtitle} onChange={(e) => this.change(e, 'subtitle')} />
        </label>
        <label>Imagem
            <input type="text" value={this.state.imagePath} onChange={(e) => this.change(e, 'imagePath')} />
        </label>
        <label>Sinopse
            <textarea value={this.state.storyline} onChange={(e) => this.change(e, 'storyline')} />
        </label>
        <label>Avaliação
            <input type="number" value={this.state.rating} onChange={(e) => this.changeNumber(e, 'rating')} />
        </label>
        <label>Gênero
          <select value={this.state.genre} onChange={(e) => this.change(e, 'genre')}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={() => this.newState(onClick)}>Adicionar filme</button>
      </form>

    )
  }
}

export default AddMovie;
