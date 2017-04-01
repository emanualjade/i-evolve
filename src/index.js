import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import '../style/normalize.css';
import '../style/style.css';
import preload from './data.json';
import Home from './Home';
import About from './About';
import Search from './Search';
import Details from './Details';


const App = () => (
  <Router>
    <div className='app'>
      <div className='landing'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/search">Search</Link>
        <Link to="/details/tt1856010">Details</Link>
        <hr />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/search" component={props => <Search shows={preload.shows} {...props} />}/>
        <Route
          path="/details/:id"
          component={(props) => {
            const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
            return <Details show={selectedShow} {...props} />;
          }}
        />
      </div>
    </div>
  </Router>
);

App.propTypes = {
  match: React.PropTypes.object,
};

ReactDOM.render(<App />, document.getElementById('root'));
