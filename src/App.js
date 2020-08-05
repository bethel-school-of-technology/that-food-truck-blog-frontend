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
import Register from './Components/auth/Register';

import './App.css';

const App = () => {
  const [userData, setUserData] = useState({
    token1 = '',
    userAuth: false
  })

  const { token, userAuth } = userData;

  const getUser = (email, password) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          //Authorization: localStorage.getItem('jwtToken'),
        },
      };
      const body = localStorage.getItem('user');
      const res = await axios.post(
        'http://localhost:5000/api/auth',
        body,
        config
      );
      localStorage.setItem('user', 'token');
    } catch (error) {
      return console.log(error);
    }
  }


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
          {/* below Must be Private routes */}
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
