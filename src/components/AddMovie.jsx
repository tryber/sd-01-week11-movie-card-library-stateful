import React from 'react';

class AddMovie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: 'action'
    };
  }

  changeHandlerText = (event) => {
    this.setState({ title: event.target.value })
  }

  changeHandlerSubtitle = (event) => {
    this.setState({ subtitle: event.target.value })
  }

  changeHandlerimagePath = (event) => {
    this.setState({ imagePath: event.target.value })
  }

  changeHandlerstoryline = (event) => {
    this.setState({ storyline: event.target.value })
  }

  changeHandlerRating = (event) => {
    this.setState({ rating: parseFloat(event.target.value) })
  }

  changeHandlerGenre = (event) => {
    this.setState({ genre: event.target.value })
  }

  resetState = ((onClick) => {
    onClick(this.state);
    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: 'action'
    });
  });

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="title">Título</label>
          <input name="title" type="text" value={this.state.title} onChange={(event) => this.changeHandlerText(event)} />
        </div>
        <div>
          <label htmlFor="subtitle">Subtítulo</label>
          <input name="subtitle" type="text" value={this.state.subtitle} onChange={(event) => this.changeHandlerSubtitle(event)} />
        </div>
        <div>
          <label htmlFor="image">Imagem</label>
          <input name="imagePath" type="text" value={this.state.imagePath} onChange={(event) => this.changeHandlerimagePath(event)} />
        </div>
        <div>
          <label htmlFor="storyLine">Sinopse</label>
          <textarea name="storyline" cols="30" rows="10" value={this.state.storyline} onChange={(event) => this.changeHandlerstoryline(event)}></textarea>
        </div>
        <div>
          <label htmlFor="rating">Avaliação</label>
          <input name="rating" type="number" value={this.state.rating} onChange={(event) => this.changeHandlerRating(event, 'rating')} />
        </div>
        <div>
          <label htmlFor="genre">Gênero</label>
          <select name="genre" value={this.state.genre} onChange={(event) => this.changeHandlerGenre(event)}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={() => this.resetState(onClick)}>Adicionar filme</button>
        </div>
      </form>
    )
  }
}

export default AddMovie;
