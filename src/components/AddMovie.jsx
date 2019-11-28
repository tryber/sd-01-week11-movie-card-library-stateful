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
    this.changeHandTitle = this.changeHandTitle.bind(this);
    this.changeHandSubtitle = this.changeHandSubtitle.bind(this);
    this.changeHandImage = this.changeHandImage.bind(this);
    this.changeHandStoryline = this.changeHandStoryline.bind(this);
    this.changeHandRating = this.changeHandRating.bind(this);
    this.changeHandGenre = this.changeHandGenre.bind(this);
    this.createTextArea = this.createTextArea.bind(this);
    this.createInput = this.createInput.bind(this);
    this.createSelect = this.createSelect.bind(this);
  }
  changeHandTitle(event) {
    this.setState({ title: event.target.value });
  }

  changeHandSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  changeHandImage(event) {
    this.setState({ imagePath: event.target.value });
  }

  changeHandStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  changeHandRating(event) {
    this.setState({ rating: Number(event.target.value) });
  }

  changeHandGenre(event) {
    this.setState({ genre: event.target.value });
  }
  createInput(id, value, func, label, type) {
    return (
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          type={type}
          value={this.state[value]}
          onChange={(event) => func(event)}
        />
      </label>
    );
  }
  createTextArea() {
    return (
      <label htmlFor="sps">
        Sinopse
        <textarea
          id="sps"
          value={this.state.storyline}
          onChange={(event) => this.changeHandStoryline(event)}
        />
      </label>
    );
  }
  createSelect() {
    return (
      <label htmlFor="gen">
        Gênero
        <select
          id="gen"
          onChange={(event) => this.changeHandGenre(event)}
          value={this.state.genre}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  resetMovie(onClick) {
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

  render() {
    const { onClick } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {this.createInput(
          'tlt', 'title', this.changeHandTitle, 'Título', 'text',
        )}
        {this.createInput(
          'sub', 'subtitle', this.changeHandSubtitle, 'Subtítulo', 'text',
        )}
        {this.createInput(
          'img', 'imagePath', this.changeHandImage, 'Imagem', 'text',
        )}
        {this.createTextArea()}
        {this.createInput(
          'num', 'rating', this.changeHandRating, 'Avaliação', 'number',
        )}
        {this.createSelect()}
        <button type="button" onClick={() => this.resetMovie(onClick)}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
