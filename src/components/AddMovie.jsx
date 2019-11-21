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
  }

  changeHandler = event => {
    const { value, id } = event.target;
    this.setState({
      [id]: value
    });
  };

  addAndRemoveMovie = (onClick, event) => {
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

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form>
          <label for="title">Título</label>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.changeHandler}
          />
          <label for="subtitle">Subtítulo</label>
          <input
            type="text"
            id="subtitle"
            value={this.state.subtitle}
            onChange={this.changeHandler}
          />
          <label for="imagePath">Imagem</label>
          <input
            type="text"
            id="imagePath"
            value={this.state.imagePath}
            onChange={this.changeHandler}
          />
          <label for="storyline">Sinopse</label>
          <input
            type="text"
            id="storyline"
            value={this.state.storyline}
            onChange={this.changeHandler}
          />
          <label for="rating">Avaliação</label>
          <input
            type="text"
            id="rating"
            value={this.state.rating}
            onChange={this.changeHandler}
          />
          <label for="genre">Gênero</label>
          <select
            id="genre"
            value={this.state.genre}
            onChange={this.changeHandler}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        <button type="button" onClick={() => this.addAndRemoveMovie(onClick)}>
          Adicionar filme
        </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
