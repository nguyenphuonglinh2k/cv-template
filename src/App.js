import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainLayout from './components/main-layout/MainLayout';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <MainLayout />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
