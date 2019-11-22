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

  changeHandler = (event, name) => {
    const { value } = event.target
    this.setState(() => ({
      [name]: value
    }));
  }

  changeHandlerRating = (event, name) => {
    let { value } = event.target;
    value = Number(value);
    this.setState(() => ({
      [name]: value
    }));
  }

  btnSaveMovie(onClick) {
    const value = this.state;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(value);
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form>
          <fieldset>
            <label>
              Título
            <input type="text" value={this.state.title} onChange={(e) => this.changeHandler(e, 'title')} />
            </label>
            <label>
              Subtítulo
            <input type="text" value={this.state.subtitle} onChange={(e) => this.changeHandler(e, 'subtitle')} />
            </label>
            <label>
              Imagem
            <input type="img" value={this.state.imagePath} onChange={(e) => this.changeHandler(e, 'imagePath')} />
            </label>
            <label>
              Sinopse
          <textarea
                value={this.state.storyline}
                onChange={(e) => this.changeHandler(e, 'storyline')}
              />
            </label>
            <label>
              Avaliação
            <input type="number" value={this.state.rating} onChange={(e) => this.changeHandlerRating(e, 'rating')} />
            </label>
            <label>
              Gênero
            <select onChange={(e) => this.changeHandler(e, 'genre')} value={this.state.genre} >
                <option value="action">Ação</option>
                <option value="comedy">Comédia</option>
                <option value="thriller">Suspense</option>
              </select>
            </label>
          </fieldset>
          <button type="button" onClick={()=>this.btnSaveMovie(onClick)}>
            Adicionar filme
      </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
