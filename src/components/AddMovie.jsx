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
          onChange={event => this.changeHandler(event, element)}
        />
      </label>
    )
  }

  elementTextarea() {
    return (
      <label htmlFor="storyline">
        Sinopse
        <textarea id="storyline" value={this.state.storyline} onChange={event => this.changeHandler(event, 'storyline')} />
      </label>
    )
  }

  elementCheckbox() {
    return (
      <label htmlFor="genre">
        Gênero
        <select id="genre" value={this.state.genre} onChange={event => this.changeHandler(event, 'genre')}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    )
  }

  render() {
    const { onClick } = this.props;
    return (
      <form className="form-new-movie">
        {this.elementsInput('title', 'Título', 'text', this.state.title, 'title')}
        {this.elementsInput('subtitle', 'Subtítulo', 'text', this.state.subtitle, 'subtitle')}
        {this.elementsInput('imagePath', 'Imagem', 'text', this.state.imagePath, 'imagePath')}
        {this.elementTextarea()}
        <label htmlFor="rating">
          Avaliação
          <input id="rating" type="number" value={this.state.rating} onChange={event => this.changeNumber(event, 'rating')} />
        </label>
        {this.elementCheckbox()}
        <button type="button" onClick={() => this.resetMoviesCard(onClick)}>Adicionar filme</button>
      </form>
    );
  }
};

export default AddMovie;
