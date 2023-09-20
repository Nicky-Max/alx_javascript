#!/usr/bin/node

// Import the required module
const request = require('request');

// Get the Movie ID from the command line arguments
const movieId = process.argv[2];

// Check if the Movie ID is provided as an argument
if (!movieId) {
  console.error('Please provide a Movie ID as an argument.');
  process.exit(1);
}

// Construct the URL to fetch movie details
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Send a GET request to the Star Wars API to fetch movie details
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
  } else {
    try {
      // Parse the JSON response
      const movieData = JSON.parse(body);

      // Print the characters of the movie one by one
      movieData.characters.forEach((characterUrl) => {
        // Send a GET request to fetch the character details
        request(characterUrl, (charError, charResponse, charBody) => {
          if (!charError && charResponse.statusCode === 200) {
            const characterData = JSON.parse(charBody);
            console.log(characterData.name);
          } else {
            console.error(`Error fetching character details: ${charError ? charError.message : 'Status code ' + charResponse.statusCode}`);
          }
        });
      });
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});