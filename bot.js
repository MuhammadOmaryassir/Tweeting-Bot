var Twit = require('twit'); // importing the Twitter Module
var config = require('./Config'); // importing the oAuth Module
var fs = require('fs'); // importing files Module


var TWEET = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000 * 60 * 60 * 24 * 7 ); // this make the bot tweet once in a  week

function tweetIt() {

  var r = Math.floor(Math.random() * 49) + 1; // generate a random number between 1 and 50

  fs.readFile('./Messages/' + r + '.txt', 'utf8', function(err, data) { // to read the file
    if (err) throw err;
    var tweet = { // the tweet content
      status: '   بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ  ' + data + '  صدق اللَّهُ العظيم   ' + ' #TweetingBot'
    }
    TWEET.post('statuses/update', tweet, tweeted); // the request to make the tweets

    function tweeted(err, data, response) { // a test function check if the tweet is tweeted or not
      if (err) {
        console.log("There is A problem");
      } else {
        console.log("It worked!");

      }
    }
  });
}
