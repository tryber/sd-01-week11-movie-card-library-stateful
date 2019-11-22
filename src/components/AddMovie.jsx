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
    }
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }))
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
          <input id="title" type="text" value={this.state.title} onChange={this.changeHandler} />
        </div>

        <div>
          <label htmlFor="subtitle">Subtítulo</label>
          <input id="subtitle" type="text" value={this.state.subtitle} onChange={this.changeHandler} />
        </div>

        <div>
          <label htmlFor="image">Imagem</label>
          <input id="image" type="text" value={this.state.imagePath} onChange={this.changeHandler} />
        </div>

        <div>
          <label htmlFor="storyLine">Sinopse</label>
          <textarea id="storyLine" cols="30" rows="10" value={this.state.storyline} onChange={this.changeHandler}></textarea>
        </div>

        <div>
          <label htmlFor="rating">Avaliação</label>
          <input id="rating" type="number" value={this.state.rating} onChange={this.changeHandler} />
        </div>

        <div>
          <label htmlFor="genre">Gênero</label>
          <select id="genre" value={this.state.genre} onChange={this.changeHandler}>
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
