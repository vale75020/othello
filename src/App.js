import React, { Component } from 'react';
import Tab from './components/TAB/Tab'
import Header from './components/HEADER/Header'
import Footer from './components/FOOTER/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Tab />
        <Footer />
      </div>
    );
  }
}

export default App;
