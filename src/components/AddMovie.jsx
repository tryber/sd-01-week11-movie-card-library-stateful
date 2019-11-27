import React from 'react';
import './AddMovie.css';

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
    this.createSelect = this.createSelect.bind(this);
    this.createTextArea = this.createTextArea.bind(this);
    this.createInput = this.createInput.bind(this);
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

  createInput(id, value, func, label, type) {
    return (
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          type={type}
          value={this.state[value]}
          onChange={(e) => func(e)}
          className={`input-${type}`}
        />
      </label>
    );
  }

  createTextArea() {
    return (
      <label htmlFor="sps">
        Sinopse
        <textarea
          id="sps"
          value={this.state.storyline}
          onChange={(e) => this.changeHandlerstoryline(e)}
        />
      </label>
    );
  }

  createSelect() {
    return (
      <label htmlFor="gen">
        Gênero
        <select id="gen" onChange={(e) => this.changeHandlergenre(e)} value={this.state.genre} >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <fieldset className="add-movie">
          {this.createInput('tlt', 'title', this.changeHandlerTitle, 'Título', 'text')}
          {this.createInput('sub', 'subtitle', this.changeHandlerSubtitle, 'Subtítulo', 'text')}
          {this.createInput('img', 'imagePath', this.changeHandlerimagePath, 'Imagem', 'text')}
          {this.createTextArea()}
          {this.createInput('num', 'rating', this.changeHandlerrating, 'Avaliação', 'number')}
          {this.createSelect()}
        </fieldset>
        <button type="button" onClick={() => this.btnSaveMovie(onClick)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
