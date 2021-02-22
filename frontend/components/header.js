import React from 'react';
import styles from './header.module.css';
import {Menu, Image, Container} from 'semantic-ui-react';

class Header extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Menu secondary className={styles.menuMargin}>
            <Menu.Item>
              <Image src="/public/images/favicon.ico" alt="Main Logo" fluid />
            </Menu.Item>
            <Menu.Item>
              This is an API Boilerplate
            </Menu.Item>
            <Menu.Item>
              <a href="https://github.com/">About</a>
            </Menu.Item>
          </Menu>
          <hr className="horizontalLine"/>
        </Container>
      </>
    );
  }
}

export default Header;
