import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './sections/header/header';
import Footer from './sections/footer/footer';
import Container from './sections/container/container';
import './App.css';

class App extends React.Component {
  constructor(props) { 
    super(props);
  }
  componentWillMount() { }
  render() {
    return (
      <Fragment>
          <Header></Header>
          <BrowserRouter>
            <Container {...this.props}></Container>
          </BrowserRouter>
          <Footer {...this.props}></Footer>
      </Fragment>
    );
  }
}

export default App;
