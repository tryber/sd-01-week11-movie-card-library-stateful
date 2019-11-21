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
  
  changeHandler = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  
  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label>
          Título
          <input type="text" value={this.state.title} onChange={this.changeHandler} />
        </label>
        <label>
          Subtítulo
          <input type="text" value={this.state.subtitle} onChange={this.changeHandler} />
        </label>
        <label>
          Imagem
          <input type="text" value={this.state.imagePath} onChange={this.changeHandler} />
        </label>
        <label>
          Sinopse
          <textarea value={this.getSnapshotBeforeUpdate.storyline} onChange={this.changeHandler}></textarea>
        </label>
        <label>
          Avaliação
          <input type="number" value={this.state.rating} onChange={this.changeHandler} />
        </label>
        <label>
          Gênero
        <select value={this.state.genre} onChange={this.changeHandler}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button onClick={onClick}>Adicionar filme</button>
      </form>
    );
  }
};

export default AddMovie;
