import {store, Actions} from './server/store';
var uniqid = require('uniqid');
var bodyParser = require('body-parser');

const express = require("express");
const os = require("os");
const app = express();
const port = 5000;


// Set for handling POST data
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Serve static react app build
app.use(express.static("dist-client"));


////////////////////
// API ENDPOINTS
////////////////////

// Player start
app.post("/api/start", (req, res) => {
  let playerID = uniqid();
  store.dispatch(Actions.playerStart({id: playerID, name: req.body.name}));

  res.send({playerID});
});

// Player Attack
app.post("/api/attack", (req, res) => {
  let playerID = uniqid();
  store.dispatch(Actions.playerStart({id: playerID, name: req.body.name}));

  res.send({playerID});
});


// Start linstening
app.listen(port, () => console.log("Listening on port " + port + "!"));




