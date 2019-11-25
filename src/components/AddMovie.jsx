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

    this.changeHandTitle = this.changeHandTitle.bind(this);
    this.changeHandSubtitle = this.changeHandSubtitle.bind(this);
    this.changeHandImage = this.changeHandImage.bind(this);
    this.changeHandStoryline = this.changeHandStoryline.bind(this);
    this.changeHandRating = this.changeHandRating.bind(this);
    this.changeHandGenre = this.changeHandGenre.bind(this);
    this.createTextArea = this.createTextArea.bind(this);
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

  createInput = (value, func, label) => {
    return (
      <label htmlFor={label}>
        {label}
        <input
          id={label}
          type="text"
          value={this.state[value]}
          onChange={e => func(e)}
        />
      </label>
    );
  };

  createInputRating = (value, func, label) => {
    return (
      <label htmlFor={label}>
        {label}
        <input
          id={label}
          type="text"
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
          onChange={event => this.changeHandStoryline(event)}
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form>
          {this.createInput("title", this.changeHandTitle, "Título")}
          {this.createInput("subtitle", this.changeHandSubtitle, "Subtítulo")}
          {this.createInput("imagePath", this.changeHandImage, "Imagem")}
          {this.createTextArea()}
          {this.createInputRating("rating", this.changeHandRating, "Avaliação")}
          <label>
            Gênero
            <select
              value={this.state.genre}
              onChange={this.changeHandGenre}
              id="genre"
            >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thril">Suspense</option>
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
