var express = require('express');
var app = express();

/*
HTML forms : The form specifies the action and method that the submit button triggers,
ex. <form action="/handleForm" method="post">
i.e. submit sends an HTTP request for the url handleForm via the POST method,
with the data sent in the body of the HTTP request.
To read the body of the HTTP request in Express, we use the body-parser middleware.
** npm install body-parser **

*/
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// the urlencoded method handles data submitted via POST
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/handleForm', (req, res) => {
  // we now access the body of the request, using the name properties of the <input> elements of our form, i.e. username , animal
  var name = req.body.username;
  var animals = req.body.animal; // this is an array
  . . .
  res.send('Thank you!');
});


/*
Request Object Query Properties
example URL : http://localhost:3000/?name=Lydia&location=United+States
query starts with ? , params are separated by &, + is converted to whitespace
*/

app.use('/', (req, res) => {
  var query = req.query;
  // print out the JSON object
  // containing the key/value pairs of our Request.
  console.log(query);

  var name = query.name;         // 'Lydia'
  var location = query.location; // 'USA'

  var length = Object.keys(query).length; // 2

  res.write('Hello ' + name +
            '. I see you are visiting from ' + location + '.');
});

/*
alternative form of HTTP Request object
- parameterized URL
ex. http://localhost:3000/name/Lydia/location/United States
*/

app.use('/name/:userName/location/:userLocation',
(req, res) => {
  var params = req.params;
  // print out the JSON object
  // containing the key/value pairs of our Request.
  console.log(params);

  var name = params.userName; // 'Lydia'
  var location = params.userLocation; // 'United States'

  var length = Object.keys(params).length; // 2

  res.write('Hello ' + name +
            '. I see you are visiting from ' + location + '.');
});


// middleware - subroutes

var logger = (req, res, next) => {
var url = req.url;
var time = new Date();
console.log('Received request for ' + url +
' at ' + time);
next();
};
// this will invoke logger on every HTTP request
//app.use(logger);

// logger is invoked when accessing URIs in the public folder
app.use('/public', logger, express.static('files'));

// express.static serves static files that are locally stored in the folder 'files'
//app.use('/public', express.static('files'));


var nameFinder = (req, res, next) => {
  var name = req.query.name;
  if (name) req.username = name.toUpperCase();
  else req.username = 'Guest';
  next();
}

var greeter = (req, res, next) => {
  res.status(200).type('html');
  res.write('Hello, ' + req.username);
  next();
}

var adminName = (req, res, next) => {
  req.username = 'Admin';
  next();
}

/*
When same combinations of middleware functions are being used in multiple routes,
we can combine middleware functions into “subroutes” using Routers and then use those in our routes.
*/

var logger = (req, res, next) => { . . . }
var header = (req, res, next) => { . . . }
var footer = (req, res, next) => { . . . }

// implement subroute
var commonRoute = express.Router();
commonRoute.use(header, greeter, footer);

app.use('/welcome', logger, nameFinder,
        header, greeter, footer, (req, res) => { res.end(); } );

//apply subroute
app.use('/admin', logger, adminName,
        commonRoute, (req, res) => { res.end(); } );

//
app.use('/about', (req, res) => {
  res.send('This is the about page');
});

app.use(/*default*/ (req, res) => {
  res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
