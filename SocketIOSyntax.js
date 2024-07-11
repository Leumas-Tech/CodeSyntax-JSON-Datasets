const SocketIOSyntax = {
    "methods": [
      {
        "name": "on",
        "usage": "socket.on(event, callback)",
        "example": "// Listen for a custom event\nsocket.on('chat message', function(msg) {\n  console.log('Message received:', msg);\n});",
        "description": "Registers a handler for a specific event."
      },
      {
        "name": "emit",
        "usage": "socket.emit(event, data)",
        "example": "// Emit a custom event\nsocket.emit('chat message', 'Hello, world!');",
        "description": "Emits an event to the server or to the client."
      },
      {
        "name": "send",
        "usage": "socket.send(data)",
        "example": "// Send data to the server\nsocket.send('Hello, server!');",
        "description": "Sends a message to the server or to the client."
      }
    ],
    "events": [
      {
        "name": "connect",
        "usage": "socket.on('connect', callback)",
        "example": "// Listen for a connection event\nsocket.on('connect', function() {\n  console.log('Connected to server');\n});",
        "description": "Emitted when a connection is successfully established."
      },
      {
        "name": "disconnect",
        "usage": "socket.on('disconnect', callback)",
        "example": "// Listen for a disconnection event\nsocket.on('disconnect', function() {\n  console.log('Disconnected from server');\n});",
        "description": "Emitted when the socket is disconnected."
      }
    ],
    "properties": [
      {
        "name": "id",
        "usage": "socket.id",
        "example": "// Get the socket ID\nconst socketId = socket.id;",
        "description": "Returns the unique identifier for the socket connection."
      }
    ]
  }

  
  module.exports = SocketIOSyntax