#!/usr/bin/node
// Import the request module
const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Check if an API URL is provided as an argument
if (!apiUrl) {
  console.error('Please provide the Star Wars API URL as an argument.');
  process.exit(1);
}

// Send a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
  } else {
    try {
      // Parse the JSON response
      const filmData = JSON.parse(body);

      // Filter the films where "Wedge Antilles" (character ID 18) is present
      const filmsWithWedgeAntilles = filmData.results.filter(film =>
        film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
      );

      // Print the number of films where Wedge Antilles is present
      console.log(filmsWithWedgeAntilles.length);
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});