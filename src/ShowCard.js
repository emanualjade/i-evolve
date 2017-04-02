import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => (
  <Link className="show-card" to={`/details/${show.imdbID}`}>
    <img src={`/public/img/posters/${show.poster}`} />
    <div>
      <h3>{show.title}</h3>
      <h4>({show.year})</h4>
      <p>{show.description}</p>
    </div>
  </Link>
);

ShowCard.propTypes = {
  show: React.PropTypes.shape({
    poster: React.PropTypes.string,
    title: React.PropTypes.string,
    year: React.PropTypes.string,
    description: React.PropTypes.string,
    imdbID: React.PropTypes.string,
  }),
};

export default ShowCard;
