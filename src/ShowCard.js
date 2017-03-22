import React from 'react';

const ShowCard = ({ show }) => (
  <div className="show-card">
    <img src={`/public/img/posters/${show.poster}`} />
    <div>
      <h3>{show.title}</h3>
      <h4>({show.year})</h4>
      <p>{show.description}</p>
    </div>
  </div>
);

ShowCard.propTypes = {
  show: React.PropTypes.shape({
    poster: React.PropTypes.string,
    title: React.PropTypes.string,
    year: React.PropTypes.string,
    description: React.PropTypes.string,
  }),
};

export default ShowCard;
