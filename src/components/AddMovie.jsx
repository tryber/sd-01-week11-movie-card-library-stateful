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

  change(event, id) {
    const { value } = event.target;
    this.setState({ [id]: value });
  }

  changeNumber(event, id) {
    const { value } = event.target;
    this.setState({ [id]: Number(value) });
  }

  newState(onClick) {
    const value = this.state;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    });
    onClick(value);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="add-title">Título
            <input id="add-title" type="text" value={this.state.title} onChange={(e) => this.change(e, 'title')} />
        </label>
        <label htmlFor="add-subtitle">Subtítulo
            <input id="add-subtitle" type="text" value={this.state.subtitle} onChange={(e) => this.change(e, 'subtitle')} />
        </label>
        <label htmlFor="add-image-link">Imagem
            <input id="add-image-link" type="text" value={this.state.imagePath} onChange={(e) => this.change(e, 'imagePath')} />
        </label>
        <label htmlFor="add-synopsis">Sinopse
            <textarea id="add-synopsis"value={this.state.storyline} onChange={(e) => this.change(e, 'storyline')} />
        </label>
        <label htmlFor="add-rating">Avaliação
            <input id="add-rating" type="number" value={this.state.rating} onChange={(e) => this.changeNumber(e, 'rating')} />
        </label>
        <label htmlFor="add-genre">Gênero
          <select id="add-genre" value={this.state.genre} onChange={(e) => this.change(e, 'genre')}>
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
