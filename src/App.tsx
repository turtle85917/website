import React from 'react';
import { Route, Switch as Router } from 'react-router-dom';

import { Auth, Main } from './pages';

function App() {
  return (
    <Router>
      <Route exact path="/website/" component={Main} />
      <Route exact path="/auth" component={Auth} />
    </Router>
  );
}

export default App;