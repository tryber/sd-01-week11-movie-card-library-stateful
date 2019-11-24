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
      genre: 'action'
    };
  }
  
  changeHandler = (event, name) => {
    const { value } = event.target;
    this.setState({
      [name]: value
    })
  }

  changeNumber = (event, name) => {
    const { value } = event.target;
    this.setState({
      [name]: Number(value)
    })
  }

  resetMoviesCard = onClick => {
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
  };
  
  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label>
          Título
          <input type="text"  value={this.state.title} onChange={event => this.changeHandler(event, 'title')} />
        </label>
        <label>
          Subtítulo
          <input type="text" value={this.state.subtitle} onChange={event => this.changeHandler(event, 'subtitle')} />
        </label>
        <label>
          Imagem
          <input type="text" value={this.state.imagePath} onChange={event => this.changeHandler(event, 'imagePath')} />
        </label>
        <label>
          Sinopse
          <textarea value={this.state.storyline} onChange={event => this.changeHandler(event, 'storyline')} />
        </label>
        <label>
          Avaliação
          <input type="number" value={this.state.rating} onChange={event => this.changeNumber(event, 'rating')} />
        </label>
        <label>
          Gênero
        <select  value={this.state.genre} onChange={event => this.changeHandler(event, 'genre')}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button onClick={() => this.resetMoviesCard(onClick)}>Adicionar filme</button>
      </form>
    );
  }
};

export default AddMovie;
