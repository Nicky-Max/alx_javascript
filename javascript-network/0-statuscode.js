#!/usr/bin/node

// Import the request module
const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Check if a URL is provided as an argument
if (!url) {
  console.error('Please provide a URL as an argument.');
  process.exit(1);
}

// Send a GET request to the URL
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});


