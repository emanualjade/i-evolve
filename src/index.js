import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import '../style/normalize.css';
import '../style/style.css';
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
        <Link to="/details/blah">Details</Link>
        <hr />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/search" component={Search}/>
        <Route path="/details/:id" component={Details}/>
      </div>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
