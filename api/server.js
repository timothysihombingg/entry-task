require('dotenv').config();
 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const utils = require('./utils');
const faker = require('faker');
 
const app = express();
const port = process.env.PORT || 4000;

var fs = require('fs');
var users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
var activities = JSON.parse(fs.readFileSync('./data/activities.json', 'utf8'));

// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// static user details
const User = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  website: faker.internet.url(),
  address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
  bio: faker.lorem.sentences(),
  image: faker.image.avatar()
}
 
module.exports = User

app.get('/', (req, res) => {
  res.send('this is working');
})

app.post('/login', (req, res) => {
  const currentUser = users.find(
    user => user.email === req.body.email && user.password === req.body.password
  );
  if (!currentUser) {
    res.status(404).json('email and password did not match');
  } else {
    res.json("success");
  }
})

app.get('/activities', (req, res) => {
  res.send(activities);
})

app.get('/profile/:id', (req, res) => {
  const { id } = req.params
  const currentUser = users.find(
    user => user.id === parseInt(id)
  );
  if (!currentUser) {
    res.status(404).json('user not found');
  } else {
    res.json(currentUser);
  }
})

app.get('/activity/:id', (req, res) => {
  const { id } = req.params
  const currentActivity = activities.find(
    activity => activity.id === parseInt(id)
  );
  if (!currentActivity) {
    res.status(404).json('activity not found');
  } else {
    res.json(currentActivity);
  }
})

app.put('/like/:activityid&:username&:profile_picture', (req, res) => {
  const { activityid, username,  profile_picture } = req.params
  const currentActivity = activities.find(
    activity => activity.id === parseInt(activityid)
  );
  if (!currentActivity) {
    res.status(404).json(req.params);
  } else {
    currentActivity.likes.push({
      "username": username,
      "profile_picture": profile_picture
    })
    res.json(currentActivity);
  }
})

app.put('/participate/:activityid&:username&:profile_picture', (req, res) => {
  const { activityid, username,  profile_picture } = req.params
  const currentActivity = activities.find(
    activity => activity.id === parseInt(activityid)
  );
  if (!currentActivity) {
    res.status(404).json(req.params);
  } else {
    currentActivity.participants.push({
      "username": username,
      "profile_picture": profile_picture
    })
    res.json(currentActivity);
  }
})

app.put('/comment/:activityid&:username&:profile_picture&:comment', (req, res) => {
  const { activityid, username,  profile_picture, comment } = req.params
  const currentActivity = activities.find(
    activity => activity.id === parseInt(activityid)
  );
  if (!currentActivity) {
    res.status(404).json(req.params);
  } else {
    currentActivity.comments.push({
      "username": username,
      "profile_picture": profile_picture,
      "comment": comment
    })
    res.json(currentActivity);
  }
})
 
app.listen(port, () => {
  console.log('Server started on: ' + port);
});