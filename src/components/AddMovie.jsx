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
  }

  changeHandler = event => {
    const { name, value } = event.target
    this.setState(() => ({
      [name]: value
    }))
  }

  btnSaveMovie(onClick){
    onClick(this.state)
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      }
    )
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
      <form>
        <fieldset>
          <label>
          Título
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.changeHandler} />
          </label>
          <label>
          Subtítulo
            <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.changeHandler} />
          </label>
          <label>
          Imagem
            <input type="img" name="imagePath" value={this.state.imagePath} onChange={this.changeHandler} />
          </label>
          <label>
          Sinopse
          <textarea
            value={this.state.storyline}
            name="storyline"
            onChange={this.changeHandler}
          />
          </label>
          <label>
          Avaliação
            <input type="number" name="rating" value={this.state.rating} onChange={this.changeHandler} />
          </label>
          <label>
          Gênero
            <select onChange={this.changeHandler} value={this.state.genre} name="genre">
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </fieldset>
        <button type="button" onClick={() => this.btnSaveMovie(onClick) }>
        Adicionar filme
      </button>
      </form>
    </div>
    );
  }
}

export default AddMovie;
