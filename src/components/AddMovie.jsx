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
    this.elementsInput = this.elementsInput.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.resetMoviesCard = this.resetMoviesCard.bind(this);
    this.elementCheckbox = this.elementCheckbox.bind(this);
  }

  changeHandler(event, name) {
    const { value } = event.target;
    this.setState(
      { [name]: value },
    );
  }

  changeNumber(event) {
    this.setState(
      { rating: Number(event.target.value) },
    );
  }

  resetMoviesCard(onClick) {
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

  elementsInput(id, label, type, value, element) {
    return (
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          value={value}
          onChange={(event) => this.changeHandler(event, element)}
        />
      </label>
    );
  }

  elementCheckbox(id, value, element) {
    return (
      <select id={id} value={value} onChange={(event) => this.changeHandler(event, element)}>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form className="selected-new-movie">
        {this.elementsInput('title', 'Título', 'text', this.state.title, 'title')}
        {this.elementsInput('subtitle', 'Subtítulo', 'text', this.state.subtitle, 'subtitle')}
        {this.elementsInput('imagePath', 'Imagem', 'text', this.state.imagePath, 'imagePath')}
        <label htmlFor="storyline">
          Sinopse
          <textarea id="storyline" value={this.state.storyline} onChange={(event) => this.changeHandler(event, 'storyline')} />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input id="rating" type="number" value={this.state.rating} onChange={(event) => this.changeNumber(event, 'rating')} />
        </label>
        <label htmlFor="genre">
          Gênero
          {this.elementCheckbox('genre', this.state.genre, 'genre')}
        </label>
        <button type="button" onClick={() => this.resetMoviesCard(onClick)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
