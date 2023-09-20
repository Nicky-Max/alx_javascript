#!/usr/bin/node

// Import the required modules
const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Check if both URL and file path are provided as arguments
if (!url || !filePath) {
  console.error('Please provide both a URL and a file path as arguments.');
  process.exit(1);
}

// Send a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
  } else {
    // Write the response body to the specified file with UTF-8 encoding
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
      if (writeError) {
        console.error(`Error writing to file: ${writeError.message}`);
      } else {
        console.log(`Contents from ${url} saved to ${filePath}`);
      }
    });
  }
});