import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubChange = this.onSubChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.onStoryChange = this.onStoryChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.clickHere = this.clickHere.bind(this);
  }

  onTitleChange(event) {
    const { value } = event.target
    this.setState({ title: value })
  }

  onSubChange(event) {
    const { value } = event.target
    this.setState({ subtitle: value })
  }

  onImageChange(event) {
    const { value } = event.target
    this.setState({ imagePath: value })
  }

  onStoryChange(event) {
    const { value } = event.target
    this.setState({ storyline: value })
  }

  onRatingChange(event) {
    const { value } = event.target
    this.setState({ rating: Number(value) })
  }

  onGenreChange(event) {
    const { value } = event.target
    this.setState({ genre: value })
  }

  clickHere() {
    this.props.onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    })
  }

  render() {
    const genreOptions = [
      { value: 'action', text: 'Ação' }, { value: 'comedy', text: 'Comédia' },
      { value: 'thriller', text: 'Suspense' }];
    return (
      <form>
        <label htmlFor="film-title">Título
        <input type="text" id="film-title" name="title" value={this.state.title} onChange={this.onTitleChange} /></label>
        <label htmlFor="film-subtitle">Subtítulo
        <input type="text" id="film-subtitle" name="subtitle" value={this.state.subtitle} onChange={this.onSubChange} /></label>
        <label htmlFor="film-img">Imagem
        <input type="text" id="film-img" name="imagePath" value={this.state.imagePath} onChange={this.onImageChange} /></label>
        <label htmlFor="film-storyline">Sinopse
        <textarea id="film-storyline" name="storyline" value={this.state.storyline} onChange={this.onStoryChange} /></label>
        <label htmlFor="film-avalation">Avaliação
        <input type="number" id="film-avalation" name="rating" value={this.state.rating} onChange={this.onRatingChange} /></label>
        <label htmlFor="film-genre">Gênero
        <select name="genre" value={this.state.genre} onChange={this.onGenreChange}>
            {genreOptions.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)}
          </select></label>
        <button type='button' onClick={this.clickHere}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;
