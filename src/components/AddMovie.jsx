import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'};
    this.changeHandlerTitle = this.changeHandlerTitle.bind(this);
    this.changeHandlerSubtitle = this.changeHandlerSubtitle.bind(this);
    this.changeHandlerImagePath = this.changeHandlerImagePath.bind(this);
    this.changeHandlerStoryline = this.changeHandlerStoryline.bind(this);
    this.changeHandlerRating = this.changeHandlerRating.bind(this);
    this.changeHandlerGenre = this.changeHandlerGenre.bind(this);
    this.resetarValores = this.resetarValores.bind(this);
    this.inputUniverse = this.inputUniverse.bind(this);
    this.inputTextArea = this.inputTextArea.bind(this);
    this.inputSelect = this.inputSelect.bind(this);
  }

  changeHandlerTitle(event) {
    this.setState({ title: event.target.value });
  }

  changeHandlerSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  changeHandlerImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  changeHandlerStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  changeHandlerRating(event) {
    this.setState({ rating: Number(event.target.value) });
  }

  changeHandlerGenre(event) {
    this.setState({ genre: event.target.value });
  }

  resetarValores(onClick) {
    const value = this.state;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'});
    onClick(value);
  };

  inputUniverse(id, value, call, text, type) {
    return (
      <div className="item">
        <label htmlFor={id}>
          {text}
          <input id={id} type={type} value={this.state[value]} onChange={(event) => call(event)} />
        </label>
      </div>
    );
  };

  inputTextArea() {
    return (
      <div className="item">
        <label htmlFor="sinopse">
          Sinopse
          <textarea
            className="spn"
            id="sinopse"
            value={this.state.storyline}
            onChange={(event) => this.changeHandlerStoryline(event)}
          />
        </label>
      </div>
    );
  };

  inputSelect() {
    return (
      <div className="item">
        <label htmlFor="genre">
          Gênero
          <select
            id="genre"
            onChange={(event) => this.changeHandlerGenre(event)}
            value={this.state.genre}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  };

  render() {
    const { onClick } = this.props;
    return (
      <form className="form-addMovie">
        <fieldset>
          {this.inputUniverse('Title', 'title', this.changeHandlerTitle, 'Título', 'text')}
          {this.inputUniverse('Subtitle', 'subtitle', this.changeHandlerSubtitle, 'Subtítulo',
            'text')}
          {this.inputUniverse('Image', 'imagePath', this.changeHandlerImagePath, 'Imagem', 'text')}
          {this.inputTextArea()}
          {this.inputUniverse('Number-rating', 'rating', this.changeHandlerRating, 'Avaliação',
            'number')}
          {this.inputSelect()}
        </fieldset>
        <div className="item">
          <button className="btn" type="button" onClick={() => this.resetarValores(onClick)}>
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

export default AddMovie;
