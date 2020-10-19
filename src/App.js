import React from 'react';
import User from '../src/user'
import News from '../src/news'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={User} />
          <Route exact path='/news' component={News} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
