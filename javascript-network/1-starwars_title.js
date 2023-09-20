#!/usr/bin/node
// Import the request module
const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Check if a movie ID is provided as an argument
if (!movieId) {
  console.error('Please provide a movie ID as an argument.');
  process.exit(1);
}

// Construct the URL with the provided movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
  } else {
    try {
      // Parse the JSON response
      const movieData = JSON.parse(body);
      
      // Print the title of the movie
      console.log(movieData.title);
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});