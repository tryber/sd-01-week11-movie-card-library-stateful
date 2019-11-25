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
    this.originalState = this.state;
    this.changeTitle = this.changeTitle.bind(this);
    this.changeSubtitle = this.changeSubtitle.bind(this);
    this.changeImagePath = this.changeImagePath.bind(this);
    this.changeStoryline = this.changeStoryline.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  changeTitle(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  changeSubtitle(event) {
    const { value } = event.target;
    this.setState({ subtitle: value });
  }

  changeImagePath(event) {
    const { value } = event.target;
    this.setState({ imagePath: value });
  }

  changeStoryline(event) {
    const { value } = event.target;
    this.setState({ storyline: value });
  }

  changeRating(event) {
    const { value } = event.target;
    this.setState({ rating: parseFloat(value) });
  }

  changeGenre(event) {
    const { value } = event.target;
    this.setState({ genre: value });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.originalState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Título
          <input id="title" type="text" value={title} onChange={this.changeTitle} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input id="subtitle" type="text" value={subtitle} onChange={this.changeSubtitle} />
        </label>
        <label htmlFor="imagePath">
          Imagem
          <input id="imagePath" type="text" value={imagePath} onChange={this.changeImagePath} />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea id="storyline" value={storyline} onChange={this.changeStoryline} />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input id="rating" type="number" value={rating} onChange={this.changeRating} />
        </label>
        <label htmlFor="genre">
          Gênero
          <select id="genre" value={genre} onChange={this.changeGenre}>
            {[['Ação', 'action'], ['Comédia', 'comedy'], ['Suspense', 'thriller']].map((genres) => <option key={genres[1]} value={genres[1]}>{genres[0]}</option>)}
          </select>
        </label>
        <button id="submit" type="submit" onClick={this.addMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
