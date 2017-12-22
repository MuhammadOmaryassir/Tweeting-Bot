console.log('It,worked');

// importing the Twitter Module
var Twit = require('twit');

// import the outh Module
var config = require('./Config');
console.log(config);

var Tweet = new Twit(config);
