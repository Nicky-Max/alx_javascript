#!/usr/bin/node

// Import the required module
const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Check if the API URL is provided as an argument
if (!apiUrl) {
  console.error('Please provide the API URL as an argument.');
  process.exit(1);
}

// Send a GET request to the specified API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
  } else {
    try {
      // Parse the JSON response
      const todos = JSON.parse(body);

      // Create an object to store the count of completed tasks per user
      const completedTasksByUser = {};

      // Loop through the todos and count completed tasks per user
      todos.forEach((todo) => {
        if (todo.completed) {
          if (!completedTasksByUser[todo.userId]) {
            completedTasksByUser[todo.userId] = 1;
          } else {
            completedTasksByUser[todo.userId]++;
          }
        }
      });

      // Print the completed tasks count per user
      console.log(JSON.stringify(completedTasksByUser, null, 2));
    } catch (parseError) {
      console.error(`Error parsing JSON response: ${parseError.message}`);
    }
  }
});