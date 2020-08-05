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
import CreateBlog from './Components/blogForms/CreateBlog'
import EditBlog from './Components/blogForms/EditBlog'
// import PrivateRoute from './Components/routing/PrivateRoute';

import './App.css';
//import setAuthToken from './Components/utils/setAuthToken';

//will check for token
// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

//buy creating the 
const App = () => {
  const [userData, setUserData] = useState({
    token: '',
    userAuth: false,
  })

  const { token, userAuth } = userData;

  const getUser = (email, password) => {
    var encodedURI = 'http://localhost:5000/api/auth';
    console.log(encodedURI)
    return axios.post(encodedURI).then(response => {
      console.log(response.data)
      setUserData({
        token: response.data.toket,
        userAuth: true
      });
    });
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
          {/* below Must be Privite routes */}
          <Route exact path='/Login' component={Login} userData={userData} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/CreateBlog' component={CreateBlog} />
          <Route exact path='/EditBlog' component={EditBlog} />
          {/* <Route exact path='/Create-blog' component={Register} />
          <Route exact path='/Edit-blog' component={Register} /> */}
        </Switch>

        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
