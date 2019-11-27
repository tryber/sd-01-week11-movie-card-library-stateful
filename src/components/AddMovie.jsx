import React from "react";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    };
    // this.changeHandTitle = this.changeHandTitle.bind(this);
    // this.changeHandSubtitle = this.changeHandSubtitle.bind(this);
    // this.changeHandImage = this.changeHandImage.bind(this);
    // this.changeHandStoryline = this.changeHandStoryline.bind(this);
    // this.changeHandRating = this.changeHandRating.bind(this);
    // this.changeHandGenre = this.changeHandGenre.bind(this);
    // this.createTextArea = this.createTextArea.bind(this);
    // this.createGenreSelect = this.createGenreSelect.bind(this);
    // this.createInput = this.createInput.bind(this);
    // this.createInputRating = this.createInputRating.bind(this);
    // this.addAndRemoveMovie = this.addAndRemoveMovie.bind(this);
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

  resetMovie(onClick) {
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }
  render() {
    const { onClick } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Título
          <input
            type="text"
            value={this.state.title}
            onChange={event => this.changeHandTitle(event)}
          />
        </label>
        <br />
        <label>
          Subtítulo
          <input
            type="text"
            value={this.state.subtitle}
            onChange={event => this.changeHandSubtitle(event)}
          />
        </label>
        <br />
        <label>
          Imagem
          <input
            type="text"
            value={this.state.imagePath}
            onChange={event => this.changeHandImage(event)}
          />
        </label>
        <br />
        <label>
          Sinopse
          <textarea
            value={this.state.storyline}
            onChange={event => this.changeHandStoryline(event)}
          />
        </label>
        <br />
        <label>
          Avaliação
          <input
            type="number"
            value={this.state.rating}
            onChange={event => this.changeHandRating(event)}
          />
        </label>
        <br />
        <label>
          Gênero
          <select value={this.state.genre} onChange={event => this.changeHandGenre(event)}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={() => this.resetMovie(onClick)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
