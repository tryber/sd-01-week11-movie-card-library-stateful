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

  changeNumber = (event) => {
    this.setState({
      rating: Number(event.target.value)
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
  
  elementsInput = ( label, type, value, element ) => {
    return (
    <label>
      { label }
      <input 
      type= { type }
      value={value}
      onChange={event => this.changeHandler(event, element)}
      />
    </label>
    )
  }

  render() {
    const { onClick } = this.props;
    return (
      <form className="form-new-movie">
        {this.elementsInput('Título', 'text', this.state.title, 'title')}
        {this.elementsInput('Subtítulo', 'text', this.state.subtitle, 'subtitle')}
        {this.elementsInput('Imagem', 'text', this.state.imagePath, 'imagePath')}
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
