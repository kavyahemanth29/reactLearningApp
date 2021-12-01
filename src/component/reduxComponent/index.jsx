import React, { Component } from 'react';
import './cssFile.css';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';

class ReduxComponent extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <div className="row">
          <Content />
          <Sidebar />
        </div>
        <Footer />

      </div>
    );

  }


}

export default ReduxComponent;
