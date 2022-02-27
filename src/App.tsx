import React from 'react';
import { Route, Switch as Router } from 'react-router-dom';

import { Main } from './pages';

function App() {
  return (
    <Router>
      <Route exact path="/website/" component={Main} />
    </Router>
  );
}

export default App;