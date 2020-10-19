import React from 'react';
import {Container} from 'semantic-ui-react';
import Body from './body';
import Header from './header';
import Footer from './footer';

class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}

export default Layout;
