/*

Apply for tokens and Keys at these sites

Twitter - https://developer.twitter.com/en/portal/petition/standard/basic-info
Spotify - https://developer.spotify.com/console/get-search-item/?q=Dior&type=track&market=ES&limit=1&offset=&include_external=
OMDbAPI (FREE Account Type) - https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFggCAQ8QDxYCHgdDaGVja2VkZ2RkZGQCAw8QDxYCHwBoZGRkZAIFDxYCHgdWaXNpYmxlZ2QCBw8WAh8BaGQCAg8WAh8BaGQCAw8WAh8BaGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgMFC3BhdHJlb25BY2N0BQhmcmVlQWNjdAUIZnJlZUFjY3TuO0RQYnwPluQ%2Bi0YJHNTcgo%2BfiAFuPZl7i5U8dCGtzA%3D%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAV39P5KqwNGJgd%2F4UbyWCx3mSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulNNHYC5f864PBfygTYVt5wnDXNKUzugcOMyH4eryeeGG&at=freeAcct&Email=

*/

let Fetchtweets = require('./TwitterAPI');
let SpotifyLookUp = require('./SpotifyAPI');
let OMDbLookUp = require('./OMDbAPI');
let FileQuery = require('./TextQuery');


console.log('---------------------------------------------------------------------');

// Fetching recent tweets from a user

Fetchtweets('@SABCNews');


console.log('---------------------------------------------------------------------');

// Searchin for a song

SpotifyLookUp('Never Gonna Give You Up');

console.log('---------------------------------------------------------------------');

// Searching for a Movie

OMDbLookUp('Avengers');

console.log('---------------------------------------------------------------------');

// Executing commands from a text file

FileQuery();

