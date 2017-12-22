console.log('It,worked');

// importing the Twitter Module
var Twit = require('twit');

// import the outh Module
var config = require('./Config');
console.log(config);

var TWEET = new Twit(config);

tweetIt();

// this make the bot tweet every 24 Hours
setInterval(tweetIt, 1000*60*60*24);

function tweetIt() {

// TODO : choose a random message
	var tweet = {
	  status: ' بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ  '  + Msg +' صدق اللَّهُ العظيم ' + ' #TwitterBot'
	}

	TWEET.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	  if (err) {
	  	console.log("There is A problem");
	  } else {
	    console.log("It worked!");
	  }
	}
}
