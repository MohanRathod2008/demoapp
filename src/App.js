import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={LoginForm} />
              <Route path='/Dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
