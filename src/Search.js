import React, { Component, PropTypes } from 'react';

class Search extends Component {
  render() {
    return (
      <h1>Search page!! {this.props.stuff}</h1>
    );
  }
}

Search.propTypes = {
  stuff: PropTypes.string,
};

export default Search;
