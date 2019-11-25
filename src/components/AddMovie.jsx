import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubChange = this.onSubChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.onStoryChange = this.onStoryChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.clickHere = this.clickHere.bind(this);
  }

  onTitleChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  onSubChange(event) {
    const { value } = event.target;
    this.setState({ subtitle: value });
  }

  onImageChange(event) {
    const { value } = event.target;
    this.setState({ imagePath: value });
  }

  onStoryChange(event) {
    const { value } = event.target;
    this.setState({ storyline: value });
  }

  onRatingChange(event) {
    const { value } = event.target;
    this.setState({ rating: Number(value) });
  }

  onGenreChange(event) {
    const { value } = event.target;
    this.setState({ genre: value });
  }

  clickHere() {
    this.props.onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderInput(id, text, type, value, handleChange) {
    return (
      <label htmlFor={id}>{text}
        <input type={type} id={id} value={value} onChange={handleChange} />
      </label>
    );
  }

  renderOption(key, value, text) {
    return (
      <option key={key} value={value}>{text}</option>
    );
  }

  renderStoryline(id, text, value, onChange) {
    return (
      <label htmlFor={id}>{text}
        <textarea id={id} value={value} onChange={onChange} />
      </label>
    );
  }
  render() {
    const genreOptions = [
      { value: 'action', text: 'Ação' }, { value: 'comedy', text: 'Comédia' },
      { value: 'thriller', text: 'Suspense' }];
    return (
      <form>
        {this.renderInput('film-title', 'Título', 'text', this.state.title, this.onTitleChange)}
        {this.renderInput('film-subtitle', 'Subtítulo', 'text', this.state.subtitle, this.onSubChange)}
        {this.renderInput('film-img', 'Imagem', 'text', this.state.imagePath, this.onImageChange)}
        {this.renderStoryline('film-storyline', 'Sinopse', this.state.storyline, this.onStoryChange)}
        {this.renderInput('film-subtitle', 'Avaliação', 'number', this.state.rating, this.onRatingChange)}
        <label htmlFor="film-genre">Gênero
        <select name="genre" value={this.state.genre} onChange={this.onGenreChange}>
          {genreOptions.map((option) => this.renderOption(option.text, option.value, option.text))}
        </select>
        </label>
        <button type="button" onClick={this.clickHere}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
