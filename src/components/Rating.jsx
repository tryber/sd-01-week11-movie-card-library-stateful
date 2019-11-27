import React from 'react';
import './Rating.css';
import Star from '../star.png';

class Rating extends React.Component {

  showRating() {
    const porcRating = ((this.props.rating / 5) * 100);
    return (
      <div className="size-rating">
        <img src={Star} alt="estrela" />
        <span className="rating">{this.props.rating}</span>
        <div className="bar-rating">
          <div className="bar-rating-child" style={{ width: `${porcRating}%` }} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="movie-card-rating">
        {this.showRating()}
      </div>
    );
  }
}

export default Rating;
