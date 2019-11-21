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
}
  changeHandler = event => {
    const { name, value } = event.target
      this.setState((state) => ({
        [name]: value,
      })
    )
  }
  
  render() {
    const { onClick } = this.props.movies
    return (
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
        <input type="number" value={rating} onChange={this.changeHandler} />
      </label>
      <label>
        Gênero
      <select value={genre} onChange={this.changeHandler}>

      </select>
      </label>

    );
  }
};

export default AddMovie;
