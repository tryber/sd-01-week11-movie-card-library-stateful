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
      genre: 'action',
    });
    onClick(value);
  }

  addTitle() {
    return (
      <label htmlFor="add-title">Título
        <input id="add-title" type="text" value={this.state.title} onChange={(e) => this.change(e, 'title')} />
      </label>
    );
  }

  addSubtitle() {
    return (
      <label htmlFor="add-subtitle">Subtítulo
        <input id="add-subtitle" type="text" value={this.state.subtitle} onChange={(e) => this.change(e, 'subtitle')} />
      </label>
    );
  }

  addImage() {
    return (
      <label htmlFor="add-image-link">Imagem
        <input id="add-image-link" type="text" value={this.state.imagePath} onChange={(e) => this.change(e, 'imagePath')} />
      </label>
    );
  }

  addSynopsis() {
    return (
      <label htmlFor="add-synopsis">Sinopse
        <textarea id="add-synopsis" value={this.state.storyline} onChange={(e) => this.change(e, 'storyline')} />
      </label>
    );
  }

  addRating() {
    return (
      <label htmlFor="add-rating">Avaliação
        <input id="add-rating" type="number" value={this.state.rating} onChange={(e) => this.changeNumber(e, 'rating')} />
      </label>
    );
  }

  addGenre() {
    return (
      <label htmlFor="add-genre">Gênero
        <select id="add-genre" value={this.state.genre} onChange={(e) => this.change(e, 'genre')}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <fieldset>
          {this.addTitle()}
          {this.addSubtitle()}
          {this.addImage()}
          {this.addSynopsis()}
          {this.addRating()}
          {this.addGenre()}
          <button type="button" onClick={() => this.newState(onClick)}>Adicionar filme</button>
        </fieldset>
      </form>
    );
  }
}

export default AddMovie;
