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

    this.changeHandlerSubtitle = this.changeHandlerSubtitle.bind(this);
    this.changeHandlerTitle = this.changeHandlerTitle.bind(this);
    this.changeHandlerimagePath = this.changeHandlerimagePath.bind(this);
    this.changeHandlerstoryline = this.changeHandlerstoryline.bind(this);
    this.changeHandlerrating = this.changeHandlerrating.bind(this);
    this.changeHandlergenre = this.changeHandlergenre.bind(this);
  }

  changeHandlerSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  changeHandlerTitle(event) {
    this.setState({ title: event.target.value });
  }

  changeHandlerimagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  changeHandlerstoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  changeHandlerrating(event) {
    this.setState({ rating: Number(event.target.value) });
  }

  changeHandlergenre(event) {
    this.setState({ genre: event.target.value });
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
          <label htmlFor="tlt">
            Título
            <input
              id="tlt"
              type="text"
              value={this.state.title}
              onChange={(e) => this.changeHandlerTitle(e)}
            />
          </label>
          <label htmlFor="sub">
            Subtítulo
            <input
              type="text"
              id="sub"
              value={this.state.subtitle}
              onChange={(e) => this.changeHandlerSubtitle(e)}
            />
          </label>
          <label htmlFor="img">
          Imagem
            <input
              type="text"
              id="img"
              value={this.state.imagePath}
              onChange={(e) => this.changeHandlerimagePath(e)}
            />
          </label>
          <label htmlFor="sps">
          Sinopse
            <textarea
              id="sps"
              value={this.state.storyline}
              onChange={(e) => this.changeHandlerstoryline(e)}
            />
          </label>
          <label htmlFor="num">
          Avaliação
            <input
              id="num"
              type="number"
              value={this.state.rating}
              onChange={(e) => this.changeHandlerrating(e)}
            />
          </label>
          <label htmlFor="gen">
          Gênero
            <select id="gen" onChange={(e) => this.changeHandlergenre(e)} value={this.state.genre} >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </fieldset>
        <button type="button" onClick={() => this.btnSaveMovie(onClick)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
