const axios = require('axios'); // Promise based HTTP client for the browser and node.js
const urlsearchparams = require('urlsearchparams'); // API that allows us to construct query strings for a URL
require('dotenv').config();

// Exports as a function with parameters
module.exports = (movie)=> {

    // Contains the search parameters sent with the GET request to the API
    const data = { apikey: process.env.OMDb_APIKEY,
    t: movie, 
    };
    
    // Takes the data object and converts it into a query string 
    const params = new URLSearchParams(data);
    
    // The query string attached to the API endpoint along with the headers are sent as a GET request 
    axios.get(`http://www.omdbapi.com/?${params}`)  
      .then(response => {
          console.log(response.data); // Outputs the JSON object containing the movie details
      })
      .catch(error => {
        console.log(`${error}`); // Outputs any error that occurs
      });
   
}