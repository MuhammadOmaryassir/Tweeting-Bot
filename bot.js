console.log('It,worked');


var Twit = require('twit'); // importing the Twitter Module
var config = require('./Config'); // importing the outh Module
var fs = require('fs'); // importing files Module

var Msg ;

var TWEET = new Twit(config);
tweetIt();

// this make the bot tweet every 24 Hours
setInterval(tweetIt, 1000*60*60*24);

function tweetIt() {

var r = Math.floor(Math.random()*49) + 1;

	fs.readFile('./Messages/'+r+'.txt', 'utf8', function(err, data) {


			if (err) throw err;
			var tweet = {
				status: '   بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ  '  + data +'  صدق اللَّهُ العظيم   ' + ' #TweetingBot'
			}
			TWEET.post('statuses/update', tweet, tweeted);

			function tweeted(err, data, response) {
			  if (err) {
			  	console.log("There is A problem");
			  } else {
			    console.log("It worked!");
			  }
			}
	});

}
console.log('Tweeted');
