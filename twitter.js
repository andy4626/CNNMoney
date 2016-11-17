var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: 'p9Db1RELIwuFfqOveGmodlopv',
	consumer_secret: 'O4uOETqcspejDPovqXPFe1PYl7T1cutlda2zvY1jV5BgPwW0Yp',
	access_token_key: '798924283250704384-oJMZmMDIg3AQsu4SZ0Jm8J8CvVlZMqK',
	access_token_secret: 'leIpWa1swlegT6OuaGpDlfTxj4UJO1qolt5f5SAQZ4Xcb'
});
 
var tweets_to_display=[];

var params = {screen_name: 'cnnmoney',count: 15};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  // console.log(error);
  if (!error) {
  	tweets.forEach(function(oneItem){
  		var infos = {
  			created_at: oneItem.created_at,
  			content: oneItem.text,
  			screen_name: oneItem.user.screen_name,
  			likes: oneItem.favorite_count,
        retweets: oneItem.retweet_count,
  			profile_image: oneItem.user.profile_image_url
  		};
  		tweets_to_display.push(infos);
  	})
  	// console.log(tweets[0].created_at);
  	// console.log(tweets[0].text);
  	// console.log(tweets[0].user.screen_name);
    // tweets_to_display.push(tweets);
  }
  // console.log(tweets_to_display);
});

module.exports = tweets_to_display;