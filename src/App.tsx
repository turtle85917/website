import React from 'react';
import { Route, Switch as Router } from 'react-router-dom';

import { Auth, Main, NotFound } from './pages';

function App() {
  console.log(window.location)
  return (
    <Router>
      <Route exact path="/website/" component={Main} />
      <Route exact path="/website/auth?code=:code" component={Auth} />
      <Route path="/website/" component={NotFound} />
    </Router>
  );
}

export default App;