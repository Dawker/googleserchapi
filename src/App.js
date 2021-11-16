import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
