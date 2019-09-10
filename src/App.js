import React, { Fragment } from 'react';
import Header from './sections/header/header';
import Footer from './sections/footer/footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default App;
