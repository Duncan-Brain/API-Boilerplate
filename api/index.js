//Express Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var data = require('./TestData_2017ShortStories.json');

const port = 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route handlers
app.get('/', (req, res) => {
  res.send('Welcome to the API please see our documentation to return data');
});

app.get('/authors', (req, res) => {
  var authors = [];
  for(story of data) {
    authors.push(story.author);
  }
  res.send(authors);
});

app.get('/titles', (req, res) => {
  var titles = [];
  for(story of data){
    titles.push({"title": story.title,"author": story.author});
  }
  res.send(titles);
});

app.get('/authors/:authorname/titles/:title', (req, res) => {
  var authorname = req.params.authorname;
  var title = req.params.title;
  var titles = [];
  for(story of data){
    if(story.author == authorname && story.title == title){
      titles.push(
        {
        "title": story.title,
        "author": story.author,
        "created":story.created,
        "ups": story.ups,
        "downs": story.downs,
        "selftext": story.selftext,
        "url": story.url
        }
      );
    }
  }
  res.send(titles);
});

app.get('/authors/:authorname', (req, res) => {
  var authorname = req.params.authorname;
  var titles = [];
  for(story of data){
    if(story.author == authorname){
      titles.push(
        {
        "title": story.title,
        "author": story.author,
        "created":story.created,
        "ups": story.ups,
        "downs": story.downs,
        "selftext": story.selftext,
        "url": story.url
        }
      );
    }
  }
  res.send(titles);
});

//Connections
app.listen(port, (err) => {
  console.log(`Server listening at http://localhost:${port}`);
});
