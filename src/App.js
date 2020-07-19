import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import HomePage from './components/HomePage'
import BlogList from './components/BlogList'
import About from './components/About'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header/> 

        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/BlogList">
            <BlogList/>
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
