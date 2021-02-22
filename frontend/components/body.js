import React from 'react';
import {Divider, Card, Image, Container, Segment} from 'semantic-ui-react';
import styles from './body.module.css';

class Main extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
          <>
            <Container>
              <Segment.Group horizontal>
                <Segment>
                  <h1>Welcome</h1>
                  <div>
                    Please go to one of these endpoints to return data.
                    <br/>
                    <br/>
                    <a href="/api/titles">titles</a>
                      <div>&emsp;titles/:title</div>
                    <a href="/api/authors">authors</a>
                      <div>&emsp;authors/:authorname</div>
                      <div>&emsp;authors/:authorname/titles/:title</div>
                  </div>
                </Segment>
                <Segment>
                  <Image
                    size="medium"
                    src="/public/images/roozbeh-eslami-YlVjrBkfXt8-unsplash.jpg"
                  />
                </Segment>
                </Segment.Group>
            </Container>
          </>
        );
    }
};

export default Main;
