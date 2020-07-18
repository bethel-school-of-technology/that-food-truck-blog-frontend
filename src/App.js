import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Page from './Pages/Page'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Page/>
        
      </header>
    </div>
  );
}

export default App;
