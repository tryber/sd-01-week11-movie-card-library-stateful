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

    this.stateHandler = this.stateHandler.bind(this);
  }

  stateHandler(event) {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="title">
          Título
          <input id="title" type="text" value={title} onChange={this.stateHandler} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input id="subtitle" type="text" value={subtitle} onChange={this.stateHandler} />
        </label>
        <label htmlFor="imagePath">
          Imagem
          <input id="imagePath" type="text" value={imagePath} onChange={this.stateHandler} />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea id="storyline" value={storyline} onChange={this.stateHandler} />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input id="rating" type="number" value={rating} onChange={this.stateHandler} />
        </label>
        <label htmlFor="genre">
          Gênero
          <select id="genre" value={genre} onChange={this.stateHandler}>
            {[['Ação', 'action'], ['Comédia', 'comedy'], ['Suspense', 'thriller']].map((genres) => <option key={genres[1]} value={genres[1]}>{genres[0]}</option>)}
          </select>
        </label>
        <button id="submit" type="submit" onClick={onClick(this.state)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
