import React from 'react';
import {Icon, Menu, Item, Segment, Container} from 'semantic-ui-react';
import styles from './footer.module.css';

class Footer extends React.Component {

  render() {
    return (
      <>
        <Container>
          <hr className="horizontalLine"/>
          <Segment.Group horizontal className={styles.borderColorNone}>
            <Segment
              className={styles.horizontalTextAlign + ' ' + styles.borderColorNone}
            >
              Website Last Updated October 19, 2020
            </Segment>
            <Segment textAlign="right" className={styles.borderColorNone}>
              <Item href='https://www.reddit.com/' >
                <Icon
                  className={styles.iconNoShadow}
                  size="big"
                  circular
                  name="reddit"
                  color="black"
                  alt="Link to Reddit"
                />
              </Item>
              <Item href="https://twitter.com/" >
                <Icon
                  className={styles.iconNoShadow}
                  size="big"
                  circular
                  name="twitter"
                  color="black"
                  alt="Link to Twitter"
                />
              </Item>
              <Item href="https://github.com/" >
                <Icon
                  className={styles.iconNoShadow}
                  size="big"
                  circular
                  name="github"
                  color="black"
                  alt="Link to Github"
                />
              </Item>
            </Segment>
          </Segment.Group>
          <Segment.Group horizontal className={styles.borderColorNone}>
            <Segment className={styles.borderColorNone}>
              <Menu vertical fluid className={styles.borderColorNone}>
                <Menu.Item>
                  <Menu.Header >API Boilerplate</Menu.Header>
                  <Menu.Menu>
                    <Menu.Item >
                      <Icon className={styles.iconLeft} name="envelope" />
                      myemail (at) emailprovider.ca
                    </Menu.Item>
                    <Menu.Item>
                      <Icon className={styles.iconLeft} name="bug" />
                      Troubleshooting
                    </Menu.Item>
                    <Menu.Item >
                      <Icon className={styles.iconLeft} name="ethereum" />
                      Tips
                    </Menu.Item>
                  </Menu.Menu>
                </Menu.Item>
              </Menu>
            </Segment>
            <Segment></Segment>
            <Segment className={styles.borderColorNone}>
              <Menu vertical fluid className={styles.borderColorNone}>
                <Menu.Item>
                  <Menu.Header >Thanks to...</Menu.Header>
                  <Menu.Menu>
                    <Menu.Item >
                      <Icon className={styles.iconLeft} name="images" />
                      Images from <a href="https://unsplash.com/">Unsplash.com</a>
                    </Menu.Item>
                    <Menu.Item href = "/bugs" target="_blank">
                      <Icon className={styles.iconLeft} name="code" />
                      Built using Semantic-UI, React, Docker, Next, Node, Nginx
                    </Menu.Item>
                  </Menu.Menu>
                </Menu.Item>
              </Menu>
            </Segment>
          </Segment.Group>
        </Container>
      </>
    );
  }
}

export default Footer;
