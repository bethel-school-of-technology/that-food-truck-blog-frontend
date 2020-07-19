import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import HomePage from './components/HomePage'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header/> 

        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/BlogList">
            {/* <Topics /> */}
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
