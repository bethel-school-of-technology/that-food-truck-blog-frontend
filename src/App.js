import React from 'react';
<<<<<<< HEAD
=======
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
>>>>>>> dev
import './App.css';
import Footer from './components/footer';


function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
       
        <Footer />
      </header>
    </div>

=======
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

        <Footer/>
      </div>
    </Router>
>>>>>>> dev
  );
}


export default App;
