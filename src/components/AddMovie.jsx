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
    this.changeHandlerText = this.changeHandlerText.bind(this);
    this.changeHandlerSubtitle = this.changeHandlerSubtitle.bind(this);
    this.changeHandlerimagePath = this.changeHandlerimagePath.bind(this);
    this.changeHandlerstoryline = this.changeHandlerstoryline.bind(this);
    this.changeHandlerRating = this.changeHandlerRating.bind(this);
    this.changeHandlerGenre = this.changeHandlerGenre.bind(this);
    this.renderInputTitle = this.renderInputTitle.bind(this);
    this.renderInputSubtitle = this.renderInputSubtitle.bind(this);
    this.renderInputImagePath = this.renderInputImagePath.bind(this);
    this.renderInputStoryline = this.renderInputStoryline.bind(this);
    this.renderSelectGenre = this.renderSelectGenre.bind(this);
    this.renderInputRating = this.renderInputRating.bind(this);
  }

  changeHandlerText(event) {
    this.setState({ title: event.target.value });
  }

  changeHandlerSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  changeHandlerimagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  changeHandlerstoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  changeHandlerRating(event) {
    this.setState({ rating: parseFloat(event.target.value) });
  }

  changeHandlerGenre(event) {
    this.setState({ genre: event.target.value });
  }

  resetState(onClick) {
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

  renderInputTitle() {
    return (
      <div>
        <label htmlFor="title">
          Título
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={(event) => this.changeHandlerText(event)}
          />
        </label>
      </div>
    );
  }

  renderInputSubtitle() {
    return (
      <div>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            onChange={(event) => this.changeHandlerSubtitle(event)}
          />
        </label>
      </div>
    );
  }

  renderInputImagePath() {
    return (
      <div>
        <label htmlFor="image">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            onChange={(event) => this.changeHandlerimagePath(event)}
          />
        </label>
      </div>
    );
  }

  renderInputStoryline() {
    return (
      <div>
        <label htmlFor="storyLine">
          Sinopse
          <textarea
            name="storyline"
            cols="30"
            rows="10"
            value={this.state.storyline}
            onChange={(event) => this.changeHandlerstoryline(event)}
          />
        </label>
      </div>
    );
  }

  renderInputRating() {
    return (
      <div>
        <label htmlFor="rating">
          Avaliação
          <input
            name="rating"
            type="number"
            value={this.state.rating}
            onChange={(event) => this.changeHandlerRating(event)}
          />
        </label>
      </div>
    );
  }

  renderSelectGenre() {
    return (
      <div>
        <label htmlFor="genre">
          Gênero
          <select
            name="genre"
            value={this.state.genre}
            onChange={(event) => this.changeHandlerGenre(event)}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <div>
          {this.renderInputTitle()}
          {this.renderInputSubtitle()}
          {this.renderInputImagePath()}
          {this.renderInputStoryline()}
          {this.renderInputRating()}
          {this.renderSelectGenre()}
          <button type="button" onClick={() => this.resetState(onClick)}>Adicionar filme</button>
        </div>
      </form>
    );
  }
}

export default AddMovie;
