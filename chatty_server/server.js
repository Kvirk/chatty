// server.js

const express = require('express');
const WebSocket = require('ws');
const uuid = require('node-uuid');

const SocketServer = WebSocket.Server;
// Set the port to 4000
const PORT = 4000;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });
var users = 0;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

wss.on('connection', (ws) => {
  console.log('Client connected');
  users++;
  ws.send(JSON.stringify({type:"color", value: getRandomColor() }));
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify({type:"usersUpdate", value: users}));
  });
  ws.on('message', function incoming(data, flags) {
    var message = JSON.parse(data);
    message["id"] =uuid.v4();
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    users--;
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify({type:"usersUpdate", value: users}));
    });
    console.log('Client disconnected')});
});