import React from 'react';
import preload from './data.json';
import ShowCard from './ShowCard';

const Search = () => (
  <div className="search">
    <header>
      <h1>svideo</h1>
      <input placeholder="Search" />
    </header>
    <div>
      {preload.shows.map(show => (
        <ShowCard key={show.imbID} show={show} />
      ))}
    </div>
  </div>
);

export default Search;
