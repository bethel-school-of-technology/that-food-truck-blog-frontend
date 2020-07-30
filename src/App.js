import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/header/Header';
import HomePage from './Components/home/HomePage';
import BlogPosts from './Components/blog/BlogPosts';
import About from './Components/about/About';
import Footer from './Components/footer/Footer';
import BlogPost from './Components/blog/BlogPost';
import ContactForm from './Components/form/ContactForm';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
// import PrivateRoute from './Components/routing/PrivateRoute';

import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/About' component={About} />
          <Route exact path='/BlogPost/:blogId' component={BlogPost} />
          <Route exact path='/BlogPosts' component={BlogPosts} />
          <Route exact path='/ContactForm' component={ContactForm} />
          {/* below Must be Privite routes */}
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Register' component={Register} />
          {/* <Route exact path='/Create-blog' component={Register} />
          <Route exact path='/Edit-blog' component={Register} /> */}
        </Switch>

        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
