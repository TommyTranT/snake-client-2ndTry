// Main file that will launch game. 
const connect = require('./client');
const setupInput = require('./input')

console.log("Connecting ...")


connect();

setupInput();