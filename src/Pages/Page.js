import React, { Component } from 'react'
import HomePage from '../components/HomePage';

export class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: window.location.pathname
        };
      }
      
      
    render() {
        console.log(this.state.page)
        if (this.state.page === "/Home%20Page"){
            return(
                <HomePage/>
                
            )
        }else{
            return(
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> 
            )
        }
    }
}

export default Page
