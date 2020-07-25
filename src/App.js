import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import BlogList from './Components/BlogList';
import About from './Components/About';
import Footer from './Components/Footer';
import BlogPage from './Components/BlogPage';
import './App.css';
import Header from './Components/Header';



function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Blog List/:blogId'>
            <BlogPage blogid='blogId' />
          </Route>
          <Route path='/Blog List'>
            <BlogList />
          </Route>

          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
