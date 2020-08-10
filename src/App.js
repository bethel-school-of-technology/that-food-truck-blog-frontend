import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/header/Header';
import HomePage from './Components/home/HomePage';
import BlogList from './Components/blog/BlogList';
import About from './Components/about/About';
import Footer from './Components/footer/Footer';
import BlogPage from './Components/blog/BlogPage';
import ContactForm from './Components/form/ContactForm';
import Login from './Components/auth/Login';
import SignOut from './Components/auth/SignOut';
import Register from './Components/auth/Register';
import CreateBlog from './Components/blogForms/CreateBlog'
import EditBlog from './Components/blogForms/EditBlog'
import SpringMenu from './Components/menu/SpringMenu'
import SummerMenu from './Components/menu/SummerMenu'
import WinterMenu from './Components/menu/WinterMenu'
import FallMenu from './Components/menu/FallMenu'
// import PrivateRoute from './Components/routing/PrivateRoute';

import './App.css';

//buy creating the 
const App = () => {

  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/About' component={About} />
          <Route exact path='/BlogList/:index/:blogId' component={BlogPage} />
          <Route exact path='/BlogList' component={BlogList} />
          <Route exact path='/ContactForm' component={ContactForm} />
          {/* below Must be Private routes */}
          <Route exact path='/SpringMenu' component={SpringMenu} />
          <Route exact path='/SummerMenu' component={SummerMenu} />
          <Route exact path='/WinterMenu' component={WinterMenu} />
          <Route exact path='/FallMenu' component={FallMenu} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/SignOut' component={SignOut} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/CreateBlog' component={CreateBlog} />
          <Route exact path='/EditBlog/:id' component={EditBlog} />
      
          {/* <Route exact path='/Create-blog' component={Register} />
          <Route exact path='/Edit-blog' component={Register} /> */}
        </Switch>

        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
