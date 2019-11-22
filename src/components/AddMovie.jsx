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
    let { value } = event.target
    if (name === 'rating') { value = Number(value) };
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
      <form>
        <fieldset>
          <label htmlFor="tlt">Título<input id="tlt" type="text" value={this.state.title} onChange={(e) => this.changeHandler(e, 'title')} /></label>
          <label htmlFor="sub">Subtítulo
            <input type="text" id="sub" value={this.state.subtitle} onChange={(e) => this.changeHandler(e, 'subtitle')} /></label>
          <label htmlFor="img">Imagem
            <input type="text" id="img" value={this.state.imagePath} onChange={(e) => this.changeHandler(e, 'imagePath')} /></label>
          <label htmlFor="sps">Sinopse
            <textarea id="sps" value={this.state.storyline} onChange={(e) =>
              this.changeHandler(e, 'storyline')} /></label>
          <label htmlFor="num">Avaliação
            <input id="num" type="number" value={this.state.rating} onChange={(e) => this.changeHandler(e, 'rating')} /></label>
          <label htmlFor="gen">Gênero
            <select id="gen" onChange={(e) => this.changeHandler(e, 'genre')} value={this.state.genre} >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select></label>
        </fieldset>
        <button type="button" onClick={() => this.btnSaveMovie(onClick)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
