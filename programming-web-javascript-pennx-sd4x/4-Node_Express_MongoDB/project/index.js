var express = require('express');
var app = express();

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
