import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import BlogList from './components/blog/BlogList';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import BlogPage from './components/blog/BlogPage';
import ContactForm from './components/form/ContactForm';

import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/About' component={About} />
          <Route exact path='/BlogList/:blogId' component={BlogPage} />
          <Route exact path='/BlogList' component={BlogList} />
          <Route exact path='/ContactForm' component={ContactForm} />
        </Switch>

        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
