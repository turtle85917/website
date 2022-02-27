import React, { Component } from 'react';
import { Route, Switch as Router } from 'react-router-dom';

import { Main } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    );
  }
}

export default App;