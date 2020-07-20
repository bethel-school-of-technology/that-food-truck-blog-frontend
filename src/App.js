import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogList from './components/BlogList';
import About from './components/About';
import Footer from './components/Footer';
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
          <Route path="/Blog List">
            <BlogList/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}


export default App;
