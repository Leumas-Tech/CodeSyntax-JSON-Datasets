const ExpressNodeJSSyntax = {
    "express": {
      "methods": [
        {
          "name": "get",
          "usage": "app.get(path, callback)",
          "example": "// Handle GET requests\napp.get('/', function(req, res) {\n  res.send('Hello, world!');\n});",
          "description": "Defines a route for handling GET requests."
        },
        {
          "name": "post",
          "usage": "app.post(path, callback)",
          "example": "// Handle POST requests\napp.post('/submit', function(req, res) {\n  res.send('Form submitted!');\n});",
          "description": "Defines a route for handling POST requests."
        },
        {
          "name": "put",
          "usage": "app.put(path, callback)",
          "example": "// Handle PUT requests\napp.put('/users/:id', function(req, res) {\n  res.send('User updated!');\n});",
          "description": "Defines a route for handling PUT requests."
        },
        {
          "name": "delete",
          "usage": "app.delete(path, callback)",
          "example": "// Handle DELETE requests\napp.delete('/users/:id', function(req, res) {\n  res.send('User deleted!');\n});",
          "description": "Defines a route for handling DELETE requests."
        }
      ],
      "functions": [
        {
          "name": "listen",
          "usage": "app.listen(port, [hostname], [callback])",
          "example": "// Start the server\napp.listen(3000, function() {\n  console.log('Server started on port 3000');\n});",
          "description": "Binds and listens for connections on the specified port and optional hostname."
        },
        {
          "name": "use",
          "usage": "app.use([path], callback)",
          "example": "// Use middleware\napp.use(express.json());",
          "description": "Mounts middleware functions at the specified path. If no path is specified, middleware is executed for every request to the app."
        }
      ],
      "properties": []
    },
    "mongodb": {
      "methods": [
        {
          "name": "connect",
          "usage": "MongoClient.connect(url, [options], callback)",
          "example": "// Connect to MongoDB\nconst MongoClient = require('mongodb').MongoClient;\nconst url = 'mongodb://localhost:27017';\nMongoClient.connect(url, function(err, client) {\n  if(err) throw err;\n  console.log('Connected to MongoDB');\n});",
          "description": "Connects to the MongoDB server."
        },
        {
          "name": "insertOne",
          "usage": "collection.insertOne(document, [options], callback)",
          "example": "// Insert a document into a collection\nconst document = { name: 'John', age: 30 };\ncollection.insertOne(document, function(err, result) {\n  if(err) throw err;\n  console.log('Document inserted');\n});",
          "description": "Inserts a single document into the collection."
        },
        {
          "name": "findOne",
          "usage": "collection.findOne(query, [options], callback)",
          "example": "// Find a document in a collection\nconst query = { name: 'John' };\ncollection.findOne(query, function(err, result) {\n  if(err) throw err;\n  console.log(result);\n});",
          "description": "Finds a single document in the collection that matches the query."
        },
        {
          "name": "updateOne",
          "usage": "collection.updateOne(filter, update, [options], callback)",
          "example": "// Update a document in a collection\nconst filter = { name: 'John' };\nconst update = { $set: { age: 40 } };\ncollection.updateOne(filter, update, function(err, result) {\n  if(err) throw err;\n  console.log('Document updated');\n});",
          "description": "Updates a single document in the collection that matches the filter."
        },
        {
          "name": "deleteOne",
          "usage": "collection.deleteOne(filter, [options], callback)",
          "example": "// Delete a document from a collection\nconst filter = { name: 'John' };\ncollection.deleteOne(filter, function(err, result) {\n  if(err) throw err;\n  console.log('Document deleted');\n});",
          "description": "Deletes a single document from the collection that matches the filter."
        }
      ],
      "functions": [],
      "properties": []
    },
    "expressSyntax": [
      {
        "name": "app.listen",
        "description": "Starts the Express server and listens for connections on the specified port.",
        "example": "app.listen(3000, () => { console.log('Server is running on port 3000'); });",
        "details": {
          "how_it_works": "The 'app.listen' method binds and listens for connections on the specified port. It takes a port number and an optional callback function that is executed once the server is running.",
          "use_cases": ["Starting the server", "Listening for connections"],
          "additional_examples": [
            "app.listen(8080, () => { console.log('Server is running on port 8080'); });",
            "app.listen(5000);"
          ]
        },
        "meta": {
          "title": "Express app.listen Method",
          "description": "Learn how to use the 'app.listen' method in Express to start the server and listen for connections.",
          "keywords": "express, app.listen, start server, listen"
        }
      },
      {
        "name": "app.get",
        "description": "Defines a route handler for GET requests.",
        "example": "app.get('/', (req, res) => { res.send('Hello, World!'); });",
        "details": {
          "how_it_works": "The 'app.get' method defines a route handler for GET requests to the specified path. It takes a path and a callback function that handles the request and response.",
          "use_cases": ["Handling GET requests", "Defining routes"],
          "additional_examples": [
            "app.get('/about', (req, res) => { res.send('About Page'); });",
            "app.get('/users', (req, res) => { res.json(users); });"
          ]
        },
        "meta": {
          "title": "Express app.get Method",
          "description": "Learn how to use the 'app.get' method in Express to define route handlers for GET requests.",
          "keywords": "express, app.get, route handler, GET request"
        }
      },
      {
        "name": "app.post",
        "description": "Defines a route handler for POST requests.",
        "example": "app.post('/submit', (req, res) => { res.send('Form submitted'); });",
        "details": {
          "how_it_works": "The 'app.post' method defines a route handler for POST requests to the specified path. It takes a path and a callback function that handles the request and response.",
          "use_cases": ["Handling POST requests", "Defining routes"],
          "additional_examples": [
            "app.post('/login', (req, res) => { res.json({ success: true }); });",
            "app.post('/register', (req, res) => { res.send('Registration successful'); });"
          ]
        },
        "meta": {
          "title": "Express app.post Method",
          "description": "Learn how to use the 'app.post' method in Express to define route handlers for POST requests.",
          "keywords": "express, app.post, route handler, POST request"
        }
      },
      {
        "name": "app.use",
        "description": "Mounts middleware functions at the specified path.",
        "example": "app.use(express.json());",
        "details": {
          "how_it_works": "The 'app.use' method mounts middleware functions at the specified path. If no path is specified, it is mounted at the root level. Middleware functions have access to the request and response objects and can modify them.",
          "use_cases": ["Adding middleware", "Parsing request bodies"],
          "additional_examples": [
            "app.use('/static', express.static('public'));",
            "app.use((req, res, next) => { console.log('Request URL:', req.originalUrl); next(); });"
          ]
        },
        "meta": {
          "title": "Express app.use Method",
          "description": "Learn how to use the 'app.use' method in Express to mount middleware functions.",
          "keywords": "express, app.use, middleware, mount"
        }
      },
      {
        "name": "req.params",
        "description": "Contains route parameters, captured from the URL.",
        "example": "app.get('/user/:id', (req, res) => { res.send(`User ID: ${req.params.id}`); });",
        "details": {
          "how_it_works": "The 'req.params' object contains route parameters, which are named segments of the URL. These parameters are captured as properties of 'req.params'.",
          "use_cases": ["Accessing route parameters", "Dynamic routing"],
          "additional_examples": [
            "app.get('/post/:postId/comment/:commentId', (req, res) => { res.send(`Post ID: ${req.params.postId}, Comment ID: ${req.params.commentId}`); });",
            "app.get('/product/:category/:id', (req, res) => { res.send(`Category: ${req.params.category}, Product ID: ${req.params.id}`); });"
          ]
        },
        "meta": {
          "title": "Express req.params Object",
          "description": "Learn how to use the 'req.params' object in Express to access route parameters.",
          "keywords": "express, req.params, route parameters, URL segments"
        }
      },
      {
        "name": "req.query",
        "description": "Contains query parameters, parsed from the URL.",
        "example": "app.get('/search', (req, res) => { res.send(`Search query: ${req.query.q}`); });",
        "details": {
          "how_it_works": "The 'req.query' object contains query parameters, which are parsed from the URL. These parameters are captured as properties of 'req.query'.",
          "use_cases": ["Accessing query parameters", "Handling search queries"],
          "additional_examples": [
            "app.get('/filter', (req, res) => { res.send(`Category: ${req.query.category}`); });",
            "app.get('/sort', (req, res) => { res.send(`Sort by: ${req.query.sortBy}`); });"
          ]
        },
        "meta": {
          "title": "Express req.query Object",
          "description": "Learn how to use the 'req.query' object in Express to access query parameters.",
          "keywords": "express, req.query, query parameters, URL query"
        }
      },
      {
        "name": "req.body",
        "description": "Contains the parsed body of the request.",
        "example": "app.post('/data', (req, res) => { res.send(`Received data: ${JSON.stringify(req.body)}`); });",
        "details": {
          "how_it_works": "The 'req.body' object contains the parsed body of the request. Middleware like 'express.json()' or 'express.urlencoded()' is needed to parse the body.",
          "use_cases": ["Accessing request body", "Handling form submissions"],
          "additional_examples": [
            "app.post('/submit', (req, res) => { res.send(`Form submitted: ${JSON.stringify(req.body)}`); });",
            "app.post('/api/data', (req, res) => { res.json({ received: req.body }); });"
          ]
        },
        "meta": {
          "title": "Express req.body Object",
          "description": "Learn how to use the 'req.body' object in Express to access the parsed body of the request.",
          "keywords": "express, req.body, request body, parsed body"
        }
      },
      {
        "name": "res.send",
        "description": "Sends a response to the client.",
        "example": "app.get('/', (req, res) => { res.send('Hello, World!'); });",
        "details": {
          "how_it_works": "The 'res.send' method sends a response to the client. It can send strings, objects, or arrays.",
          "use_cases": ["Sending responses", "Returning data"],
          "additional_examples": [
            "res.send('Welcome to my website');",
            "res.send({ message: 'Data received' });"
          ]
        },
        "meta": {
          "title": "Express res.send Method",
          "description": "Learn how to use the 'res.send' method in Express to send responses to the client.",
          "keywords": "express, res.send, response, send data"
        }
      },
      {
        "name": "res.json",
        "description": "Sends a JSON response to the client.",
        "example": "app.get('/user', (req, res) => { res.json({ name: 'John', age: 30 }); });",
        "details": {
          "how_it_works": "The 'res.json' method sends a JSON response to the client. It converts the given object or array into JSON format and sets the 'Content-Type' header to 'application/json'.",
          "use_cases": ["Sending JSON data", "API responses"],
          "additional_examples": [
            "res.json({ success: true });",
            "res.json({ users: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }] });"
          ]
        },
        "meta": {
          "title": "Express res.json Method",
          "description": "Learn how to use the 'res.json' method in Express to send JSON responses to the client.",
          "keywords": "express, res.json, JSON response, send data"
        }
      },
      {
        "name": "res.status",
        "description": "Sets the HTTP status code for the response.",
        "example": "app.get('/not-found', (req, res) => { res.status(404).send('Not Found'); });",
        "details": {
          "how_it_works": "The 'res.status' method sets the HTTP status code for the response. It can be chained with other methods like 'res.send' or 'res.json'.",
          "use_cases": ["Setting HTTP status codes", "Error handling"],
          "additional_examples": [
            "res.status(200).json({ success: true });",
            "res.status(500).send('Internal Server Error');"
          ]
        },
        "meta": {
          "title": "Express res.status Method",
          "description": "Learn how to use the 'res.status' method in Express to set the HTTP status code for the response.",
          "keywords": "express, res.status, HTTP status, response code"
        }
      },
      {
        "name": "next",
        "description": "Passes control to the next middleware function.",
        "example": "app.use((req, res, next) => { console.log('Request URL:', req.originalUrl); next(); });",
        "details": {
          "how_it_works": "The 'next' function is used to pass control to the next middleware function. It is called within middleware functions to continue the request-response cycle.",
          "use_cases": ["Chaining middleware", "Continuing request processing"],
          "additional_examples": [
            "app.use((req, res, next) => { req.requestTime = Date.now(); next(); });",
            "app.get('/test', (req, res, next) => { if (req.query.test) next(); else res.send('No test query'); }, (req, res) => { res.send('Test query found'); });"
          ]
        },
        "meta": {
          "title": "Express next Function",
          "description": "Learn how to use the 'next' function in Express to pass control to the next middleware function.",
          "keywords": "express, next, middleware, request-response cycle"
        }
      },
      {
        "name": "app.use (Error Handling)",
        "description": "Defines error-handling middleware.",
        "example": "app.use((err, req, res, next) => { console.error(err.stack); res.status(500).send('Something broke!'); });",
        "details": {
          "how_it_works": "Error-handling middleware takes four arguments: 'err', 'req', 'res', and 'next'. It handles errors passed to 'next()' or thrown within middleware functions.",
          "use_cases": ["Handling errors", "Custom error responses"],
          "additional_examples": [
            "app.use((err, req, res, next) => { res.status(404).send('Not Found'); });",
            "app.use((err, req, res, next) => { if (err.type === 'time-out') res.status(408).send('Request Timeout'); else next(err); });"
          ]
        },
        "meta": {
          "title": "Express Error-Handling Middleware",
          "description": "Learn how to define error-handling middleware in Express to handle and respond to errors.",
          "keywords": "express, error-handling, middleware, errors"
        }
      }
    ]
  }

  
  module.exports = ExpressNodeJSSyntax;