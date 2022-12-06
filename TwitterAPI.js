const axios = require('axios'); // Promise based HTTP client for the browser and node.js
const urlsearchparams = require('urlsearchparams'); // API that allows us to construct query strings for a URL
require('dotenv').config();


// Exports as a function with parameters
module.exports = (username)=> {

    // Contains the search parameters sent with the GET request to the API
    const data = { query: username,
    max_results: 20, 
    };
    
    // Contains the headers sent with the GET request to the API 
    const headers = { headers: {
        'Authorization' : 'Bearer ' + process.env.Twitter_Token,
    }};
    
    // Takes the data object and converts it into a query string 
    const params = new URLSearchParams(data);
    
    // The query string attached to the API endpoint along with the headers are sent as a GET request 
    axios.get(`https://api.twitter.com/2/tweets/search/recent?${params}`, headers)  
      .then(response => {
        // Checks the meta data to see how many tweets were retrieved
          if (response.data.meta.result_count > 0) {
              console.log(response.data.data); // Outputs the JSON object containing the tweets
          }
          else {
            console.log('No recent tweets could be found'); // Outputs this message if no tweets were retrieved
          }
      })
      .catch(error => {
        console.log(`${error}`); // Outputs any error that occurs
      });
   
}