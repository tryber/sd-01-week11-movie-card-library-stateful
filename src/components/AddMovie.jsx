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

    this.changeHandlerTitle = this.changeHandlerTitle.bind(this);
    this.changeHandlerSubtitle = this.changeHandlerSubtitle.bind(this);
    this.changeHandlerImagePath = this.changeHandlerImagePath.bind(this);
    this.changeHandlerStoryline = this.changeHandlerStoryline.bind(this);
    this.changeHandlerRating = this.changeHandlerRating.bind(this);
    this.changeHandlerGenre = this.changeHandlerGenre.bind(this);
    this.createTextArea = this.createTextArea.bind(this);
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

  addAndRemoveMovie = onClick => {
    onClick(this.state);
    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    });
  };

  creatingInput = (value, func, label, type) => {
    return (
      <label htmlFor={label}>
        {label}
        <input
          id={label}
          type={type}
          value={this.state[value]}
          onChange={e => func(e)}
        />
      </label>
    );
  };

  createTextArea() {
    return (
      <label htmlFor="Sinopse">
        Sinopse
        <textarea
          id="Sinopse"
          value={this.state.storyline}
          onChange={event => this.changeHandlerStoryline(event)}
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form>
          {this.creatingInput(
            "title",
            this.changeHandlerTitle,
            "Título",
            "text"
          )}
          {this.creatingInput(
            "subtitle",
            this.changeHandlerSubtitle,
            "Subtítulo",
            "text"
          )}
          {this.creatingInput(
            "imagePath",
            this.changeHandlerImagePath,
            "Imagem",
            "text"
          )}
          {this.createTextArea()}
          {this.creatingInput(
            "rating",
            this.changeHandlerRating,
            "Avaliação",
            "number"
          )}
          <label>
            Gênero
            <select
              value={this.state.genre}
              onChange={this.changeHandlerGenre}
              id="genre"
            >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button type="button" onClick={() => this.addAndRemoveMovie(onClick)}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
