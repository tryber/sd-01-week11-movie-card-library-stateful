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

  changeHandler = (event, name) => {
    const { value } = event.target
    this.setState(() => ({
      [name]: value
    }));
  }

  changeHandlerRating = (event, name) => {
    const { value } = event.target
    this.setState(() => ({
      [name]: parseFloat(value)
    }));
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
          <input name="title" type="text" value={this.state.title} onChange={(event) => this.changeHandler(event, 'title')} />
        </div>
        <div>
          <label htmlFor="subtitle">Subtítulo</label>
          <input name="subtitle" type="text" value={this.state.subtitle} onChange={(event) => this.changeHandler(event, 'subtitle')} />
        </div>
        <div>
          <label htmlFor="image">Imagem</label>
          <input name="imagePath" type="text" value={this.state.imagePath} onChange={(event) => this.changeHandler(event, 'imagePath')} />
        </div>
        <div>
          <label htmlFor="storyLine">Sinopse</label>
          <textarea name="storyline" cols="30" rows="10" value={this.state.storyline} onChange={(event) => this.changeHandler(event, 'storyline')}></textarea>
        </div>
        <div>
          <label htmlFor="rating">Avaliação</label>
          <input name="rating" type="number" value={this.state.rating} onChange={(event) => this.changeHandlerRating(event, 'rating')} />
        </div>
        <div>
          <label htmlFor="genre">Gênero</label>
          <select name="genre" value={this.state.genre} onChange={(event) => this.changeHandler(event, 'genre')}>
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
