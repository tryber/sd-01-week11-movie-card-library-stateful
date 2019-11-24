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
      genre: 'action'
    };
    // this.changeHandlerTitle = this.changeHandlerTitle.bind(this)
    // this.changeHandlerSubtitle = this.changeHandlerSubtitle.bind(this)
    // this.changeHandlerImagePath = this.changeHandlerImagePath.bind(this)
    // this.changeHandlerStoryline = this.changeHandlerStoryline.bind(this)
    // this.changeHandlerRating = this.changeHandlerRating.bind(this)
    // this.changeHandlerGenre = this.changeHandlerGenre.bind(this)
    // this.resetarValores = this.resetarValores.bind(this)
  }

  changeHandlerTitle = (event) => this.setState({ title: event.target.value });

  changeHandlerSubtitle = (event) => this.setState({ subtitle: event.target.value });

  changeHandlerImagePath = (event) => this.setState({ imagePath: event.target.value });

  changeHandlerStoryline = (event) => this.setState({ storyline: event.target.value });

  changeHandlerRating = (event) => this.setState({ rating: Number(event.target.value) });

  changeHandlerGenre = (event) => this.setState({ genre: event.target.value });

  resetarValores = (onClick) => {
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    });
  };

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="titulo">
          Título
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.changeHandlerTitle(event)}
          />
        </label>
        <label htmlFor="subtitulo">
          Subtítulo
          <input
            type="text"
            value={this.state.subtitle}
            onChange={(event) => this.changeHandlerSubtitle(event)}
          />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input
            type="text"
            value={this.state.imagePath}
            onChange={(event) => this.changeHandlerImagePath(event)}
          />
        </label>
        <label htmlFor="sinopse">
          Sinopse
          <textarea
            cols="30"
            rows="10"
            value={this.state.storyline}
            onChange={(event) => this.changeHandlerStoryline(event)}
          ></textarea>
        </label>
        <label htmlFor="avalia">
          Avaliação
          <input
            type="number"
            value={this.state.rating}
            onChange={(event) => this.changeHandlerRating(event)}
          />
        </label>
        <label htmlFor="selectgenero">
          Gênero
          <select value={this.state.genre} onChange={(event) => this.changeHandlerGenre(event)}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={() => this.resetarValores(onClick)}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
