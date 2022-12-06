const axios = require('axios'); // Promise based HTTP client for the browser and node.js
const urlsearchparams = require('urlsearchparams'); // API that allows us to construct query strings for a URL
require('dotenv').config();

// Exports as a function with parameters
module.exports = (songname)=> {

    // Contains the search parameters sent with the GET request to the API
    const data = { q: songname,
        type: 'track',
        market: 'ES',
        limit: 1,
        };
    
    // Contains the headers sent with the GET request to the API 
    const headers = { headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.Spotify_Token,
    }};
    
    // Takes the data object and converts it into a query string 
    const params = new URLSearchParams(data);
    
    // The query string attached to the API endpoint along with the headers are sent as a GET request 
    axios.get(`https://api.spotify.com/v1/search?${params}`, headers)  
      .then(response => {
        
        // Array to capture all the artists
        let artists = [];

        // Iterating through the artists array object and retrieving the artist names 
        response.data.tracks.items[0].artists.forEach(element => {
            artists.push(element.name);
        });
        
        // Outputing the song details
        console.log(`
        Artist(s): ${artists}
        Song: ${response.data.tracks.items[0].name}
        Preview Url: ${response.data.tracks.items[0].preview_url}
        Album: ${response.data.tracks.items[0].album.name}\n`);
      })
      .catch(error => {
        console.log(`${error}`); // Outputs any error that occurs
      });
   
}