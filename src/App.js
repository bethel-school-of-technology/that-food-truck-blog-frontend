import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import BlogList from './components/blog/BlogList';
import About from './components/about/About';
import Footer from './components/footer/footer';
import BlogPage from './components/blog/BlogPage';
import ContactForm from './components/form/ContactForm';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// import PrivateRoute from './components/routing/PrivateRoute';

//Redux
// import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
  return (
    // <Provider>
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/About' component={About} />
          <Route exact path='/BlogList/:blogId' component={BlogPage} />
          <Route exact path='/BlogList' component={BlogList} />
          <Route exact path='/ContactForm' component={ContactForm} />
          {/* below Must be Privite routes */}
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Create-blog' component={Register} />
          <Route exact path='/Edit-blog' component={Register} />
        </Switch>

        <Footer />
      </Fragment>
    </Router>
    // </Provider>
  );
};

export default App;
